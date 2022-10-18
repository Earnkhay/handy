<template>
<div class="benefit-container">
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <benefitCard 
          title="Effective Collaboration"
          description="Some quick example text to build on the card title
                       and make up the bulk of the card's content."
          image="benefit.jpg"
          />
        </div>
        <div class="col-md-4">
          <benefitCard 
          title="Improving Workflow"
          description="Some quick example text to build on the card title
                       and make up the bulk of the card's content."
          image="benefit.jpg"
          />
        </div>
        <div class="col-md-4">
          <benefitCard 
          title="improving Collaboration"
          description="Some quick example text to build on the card title
                       and make up the bulk of the card's content."
          image="benefit.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  import benefitCard from '@/components/UI/benefitCard.vue'

  @Options({
    components: {
      benefitCard,
    },
  })
  export default class benefits extends Vue {}
</script>

<style>
.benefit-container {
  background-color: #FAF8F8;
  padding: 6em 1em;
}
</style>