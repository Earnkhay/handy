import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import landingPage from "@/views/landingPage.vue";
import notFoundPage from "@/views/notFoundPage.vue";
import login from "@/views/loginPage.vue";
import signup from "@/views/signUp.vue";
// import Dashboard from "@/views/dashboard1.vue";
import Dashboard from "@/views/dashboard.vue";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landingPage",
    component: landingPage,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/signup",
    name: "signup",
    component: signup,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/404",
    name: "notFound",
    component: notFoundPage,
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404",
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import("../views/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//to keep user logged in on reload
const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

//navigation guard
router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You do not have access!");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
