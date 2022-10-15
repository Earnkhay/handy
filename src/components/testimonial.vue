<template>
    <carousel :items-to-show="2" :autoplay="2000" :breakpoints="breakpoints">
      <slide v-for="item in items" :key="item.id">
        <card :comment="item.comment" :name="item.name" :job="item.job"/>
      </slide>
      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </template>
  
<script lang="ts">
  import 'vue3-carousel/dist/carousel.css'
  import { Options, Vue } from 'vue-class-component';
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
  import card from '@/components/UI/card.vue'

  @Options({
    components: { 
        Carousel,
        Slide,
        Pagination,
        Navigation, 
        card
    },
    })
    export default class testimonial extends Vue {
        items = [
            {
                id : 1,
                comment : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, voluptatem sapiente? Consequuntur iusto veritatis magni facilis accusamus provident harum id error.",
                name : "Jon Snow",
                job : "Product Manager, Cenflux"
            },
            {
                id : 2,
                comment : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, voluptatem sapiente? Consequuntur iusto veritatis magni facilis accusamus provident harum id error.",
                name : "Daenarys Tagaeryan",
                job : "Designer, Cenflux"
            },
            {
                id : 3,
                comment : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, voluptatem sapiente? Consequuntur iusto veritatis magni facilis accusamus provident harum id error.",
                name : "Nk Julia",
                job : "Frontend Developer, Cenflux"
            }
        ]

        breakpoints = {
        200: {
          itemsToShow: 1,
        },
        700: {
          itemsToShow: 2,
        },
      }
        
    }
  
</script>