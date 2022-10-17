import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import landingPage from '@/views/landingPage.vue'
import notFoundPage from '@/views/notFoundPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'landingPage',
    component: landingPage
  },
  {
    path: "/404",
    name: "notFound",
    component: notFoundPage
  },
  {
    path: "/:catchAll(.*)",
    redirect: "404"
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
