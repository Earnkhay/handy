<template>
    <div class="card check">
        <div class="card-body">
            <h4 class="card-title text-card">{{ title }}</h4>
            <p class="card-text">
                {{ description}}
            </p>
        </div>
        <img class="" :src="require(`@/assets/${image}`)"  alt="features" width="550" />
  </div>

</template>
  
<script>
  import { Options, Vue } from 'vue-class-component';
  

  @Options({
    components: {},
    props: {
        title: String,
        description: String,
        image: String,
    },
   
    })
    export default class featuresCard extends Vue {}
  
</script>

<style>
.check {
    height: 28em !important;
}

</style>