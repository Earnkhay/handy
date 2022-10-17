<template>
    <top-nav></top-nav>
    <testimonial/>

    <div>
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
            <featureCard
            title="Gantt Chart"
            description="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in
                   eros elementum tristique. Duis cursus, mi quis viverra ornare."
            image="Gantt.png"
            /> 
          </div>
          <div class="col-md-4">
            <featureCard
            title="Team Scheduler"
            description="Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Suspendisse varius enim in
                   eros elementum tristique. Duis cursus, mi quis viverra ornare."
            image="team-Scheduler.png"
            /> 
          </div>
        </div>
      </div>
    </div>
</template>
  
<script lang="ts">
  import { Options, Vue } from 'vue-class-component';
  import topNav from '@/components/topNav.vue';
  import testimonial from '@/components/testimonial.vue'
  import benefitCard from '@/components/UI/benefitCard.vue'
  import featureCard from '@/components/UI/featureCard.vue'

  @Options({
    components: {
      topNav,
      testimonial,
      benefitCard,
      featureCard
    },
  })
  export default class landingPage extends Vue {}
</script>
  