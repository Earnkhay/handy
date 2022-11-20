<template>
  <div>
    <apexchart width="500" type="bar" :options="options" :series="series">
    </apexchart>
  </div>
</template>

<script>
import { Options, Vue } from "vue-class-component";
import VueApexCharts from "vue-apexcharts";

@Options({
  components: {},
  data: () => ({
    options: {
      chart: {
        id: "vuechart-example",
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
    },
    series: [
      {
        name: "series-1",
        data: [55, 62, 89, 66, 98, 72, 101, 75, 94, 120, 117, 139],
      },
    ],
  }),
})
export default class reportChart extends Vue {}
</script>
<style></style>
