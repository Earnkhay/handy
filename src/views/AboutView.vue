<template>
  <top-nav></top-nav>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }} </p>
    <p>{{ email }} </p>

  </div>
</template>

<script >
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import { getAuth } from "firebase/auth";

  const auth = getAuth();
  const user = auth.currentUser;

  @Options({
    components: {
      topNav,
    },
    props: {
      details: String,
    }
  })
  export default class about extends Vue {
    name = "User"
    email = ""
    
    mounted(){
      if (user !== null) {
        this.name = user.displayName;
        this.email = user.email;
        // const photoURL = user.photoURL;
        const emailVerified = user.emailVerified;

        console.log( this.name, this.email, emailVerified, 'trying to get username');

        // const uid = user.uid;
      }

    }
  }
</script>
