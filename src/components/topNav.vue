<template>
   <nav class="navbar navbar-expand-lg navbar-light bg-light pt-4 mb-3 border-bottom bg-transparent border-dark shadow-sm">
  <div class="container">
    <a class="navbar-brand img-responsive" href="#"><img src="../assets/handylogo.png" class="img-responsive" alt=""></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 ms-auto justify-content-end me-5" style="font-weight: bold;">
        <li class="nav-item">
          <a class="nav-link active px-3 link-dark" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link px-3 link-dark" href="#">About</a>
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
      </ul>
      <button class="btn me-2 px-4 py-2" type="button">Get started</button>

    </div>
  </div>
  </nav>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    components: {    
    },
  })
  export default class topNav extends Vue {}
</script>
  
<style scoped>
button{
  background-color: darkblue; 
  color: white; 
  font-size: 18px;
}
</style>