<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light pt-4 border-bottom bg-transparent border-dark shadow-sm">
  <div class="container">
    <router-link class="navbar-brand img-responsive" :to="{name: 'landingPage'}"><img src="../assets/handylogo.png" class="img-responsive" alt=""></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto me-5" style="font-weight: bold;">
        <li class="nav-item">
          <router-link class="nav-link px-3 link-dark" active-class="text-primary" :to="{name: 'landingPage'}">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link px-3 link-dark" active-class="text-primary" :to="{name: 'about'}">About</router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 link-dark" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle px-3 link-dark" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Features
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item logout">
          <a class="nav-link px-3 link-dark" @click="logOutAction" v-if="isLoggedIn">logout</a>
        </li>
      </ul>

        <router-link :to="{name: 'signup'}" class="text-decoration-none link-light btn me-2 px-4 py-2 bg-primary fs-5 navBtn">Get started</router-link>
    </div>
  </div>
  </nav>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component'
  import { getAuth, onAuthStateChanged, signOut  } from '@firebase/auth';

  let auth;

  @Options({
    components: {    
    },
  })
  
  export default class topNav extends Vue {
    isLoggedIn = false
    
    mounted(){
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.isLoggedIn = true;
        } else {
          this.isLoggedIn = false;
        }
      })
    }
    
    logOutAction(){
      auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/")
      })
    }
  }
</script>
  
<style scoped>

.btn.navBtn:hover{
  color: red !important;
}

.nav-link:hover{
  color: red !important;
}

.logout{
  cursor: pointer;
}
</style>