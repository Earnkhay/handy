<template>
    <div class="card card-height">
        <div class="card-body">
            <h4 class="card-title text-card">{{ title }}</h4>
            <p class="card-text">
                {{ description}}
            </p>
        </div>
        <img class="img-fluid" :src="require(`@/assets/${image}`)"  alt="features" width="550" />
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
.card-height {
    height: 29em !important;
}

@media (min-width:320px) {
  .card-height {
    /* height: 25em  !important; */
    margin-bottom: 2em;
  }
}


</style>