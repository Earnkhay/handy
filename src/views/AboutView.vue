<template>
  <top-nav></top-nav>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ name }} </p>
    <p>{{ email }} </p>

  </div>
  <div>
  <!-- <apexchart width="500" type="bar" :options="options" :series="series"></apexchart> -->
  <vue-apex-charts width="500" type="bar" :options="options" :series="series"></vue-apex-charts>
</div>
</template>

<script >
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import { getAuth } from "firebase/auth";
  import VueApexCharts from "vue3-apexcharts"

  const auth = getAuth();
  const user = auth.currentUser;

  @Options({
    components: {
      topNav,
      VueApexCharts
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

    options = {
        chart: {
          id: 'vuechart-example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      }
      series = [{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
  }
</script>
