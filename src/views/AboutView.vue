<template>
  <top-nav></top-nav>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p>{{ details }}</p> -->

  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import { getAuth } from "firebase/auth";

  const auth = getAuth();
  const user = auth.currentUser;
  
  @Options({
    components: {
      topNav,
    },
  })
  export default class about extends Vue {
    
    mounted(){
      if (user !== null) {
        const displayName = user.displayName;
        const email = user.email;
        // const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        console.log(displayName, email, emailVerified, 'trying to get username');

        const uid = user.uid;
      }

    }
  }
</script>
