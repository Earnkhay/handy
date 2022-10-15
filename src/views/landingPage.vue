<template>
    <top-nav></top-nav>
    <testimonial/>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import testimonial from '@/components/testimonial.vue'

  @Options({
    components: {
      topNav,
      testimonial
    },
  })
  export default class landingPage extends Vue {}
</script>
  