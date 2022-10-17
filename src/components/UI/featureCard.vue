<template>
    <div class="card benefit-card">
        <div class="card-body">
            <h4 class="card-title text-card">{{ title }}</h4>
            <p class="card-text">
                {{ description}}
            </p>
        </div>
        <img class="" :src="require(`@/assets/${image}`)"  alt="Card image cap" />
  </div>

</template>
  
<script>
  import { Options, Vue } from 'vue-class-component';
  

  @Options({
    components: {},
    props: {
        title: String,
        description: String,
        image: String
    },
   
    })
    export default class featuresCard extends Vue {}
  
</script>

<style>
.benefit-card {
    background-color: #FAF8F8 !important;
    height: 26em !important;
}

.text-card {
    color: #133F6C !important;
    font-weight: 700;
}
</style>