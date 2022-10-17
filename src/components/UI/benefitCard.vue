<template>
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">{{ title }}</h4>
            <p class="card-text">
                {{ description}}
            </p>
            <!-- <img class="" src="../../assets/benefit.jpg" alt="Card image cap"> -->
            <img class="" :src="require(`@/assets/${image}`)"  alt="Card image cap" />
  </div>
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
    export default class benefitCard extends Vue {}
  
</script>