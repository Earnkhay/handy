<template>
    <top-nav></top-nav>
  </template>
  
  <script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';

  @Options({
    components: {
      topNav,
    },
  })
  export default class landingPage extends Vue {}
  </script>
  