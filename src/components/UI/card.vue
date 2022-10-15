<template>
    <div class="card text-start border-primary m-3">
        <!-- <div class="card-header bg-transparent">
            
        </div> -->
        <div class="card-body">
          <div class="py-3">
            <i class="fa-solid fa-star"></i><span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span><span><i class="fa-solid fa-star"></i></span>
            <span><i class="fa-solid fa-star"></i></span>
          </div>
            <p class="card-text">{{ comment }}</p>
            <div class="d-flex">
                <img src="" alt="" class="me-3">
            <div>
            <h5 class="card-title text-primary">{{ name }}</h5>
            <p>{{ job }}</p>
            </div>
            </div>
        </div>
        </div>
</template>

<script lang="ts">
  import { Options, Vue } from 'vue-class-component';

  @Options({
    props: {
      comment: String,
      name: String,
      job: String,
    },
  })
  export default class card extends Vue {}
</script>

<style scoped>
img {
  padding: 30px;
  border-radius: 50%;
  background-color: darkgrey;
}

i {
  color: blue;
  font-size: 1.2rem;
}
</style>