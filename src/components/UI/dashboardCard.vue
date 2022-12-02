<template>
  <div class="card">
    <div class="card-body d-flex justify-content-between">
      <div class="card-txt">
        <h5 class="card-title mx-3">
          <doughnutChart />
        </h5>
        <p class="card-text w-50 fw-bold title-color">{{ title }}</p>
      </div>
      <div class="card-icon">
        <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import doughnutChart from "../UI/doughnutChart";

@Options({
  components: {
    doughnutChart,
  },
  props: {
    title: String,
  },
})
export default class featuresCard extends Vue {}
</script>

<style scoped>
.title-color {
  color: #858585;
}

.card-txt {
  display: flex;
  justify-content: center;
  align-items: center;
}

.card-icon {
  cursor: pointer;
}
</style>
