<template>
    <div class="features-container">
        <div class="container">
            <h3 class="feature-header">Project Management</h3>
            <div class="feature-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius 
                enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.
            </div>
            <div class="row">
            <div class="col-md-6 check">
                <featureCard 
                title="Improving Workflow"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."
                image="chart.png"
                size="100"
                />
            </div>
            <div class="col-md-6">
                <featureCard 
                title="Improving Collaboration"
                description="Some quick example text to build on the card title
                            and make up the bulk of the card's content."
                image="clock.png"
                />
            </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';

    import featureCard from '@/components/UI/featureCard.vue'

    @Options({
    components: {
        featureCard,
    },
    })
    export default class features extends Vue {}
</script>

<style>
.features-container {
    margin: 4em 0;
}
.feature-header {
    font-size: 3em;
    color: #2764AE;
}

.feature-desc {
    margin: 1em 0;
    width: 50%;
}

@media (min-width:320px) {
  .feature-desc {
    width: 100%;
  }
}

</style>