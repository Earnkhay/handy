<template>
    <top-nav></top-nav>
    <benefits />
    <features/>
    <testimonial/>
    <footer-comp/>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import testimonial from '@/components/testimonial.vue'
  import benefits from '@/components/benefits.vue'
  import features from '@/components/features.vue'
  import footerComp from '@/components/footerComp.vue'
 

  @Options({
    components: {
      topNav,
      testimonial,
      benefits,
      features,
      footerComp
    },
  })
  export default class landingPage extends Vue {}
</script>

<style>
.benefit-container {
  background-color: #FAF8F8;
  padding: 6em 1em;
}
</style>