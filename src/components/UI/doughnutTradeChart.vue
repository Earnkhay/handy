<template>
  <div class="chart-wrapper">
    <canvas id="myTradeChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "doughnutTradeChart",
  mounted() {
    const ctxTrade = document.getElementById("myTradeChart");

    new Chart(ctxTrade, {
      type: "doughnut",
      data: {
        // labels: ["Red", "Blue", "Yellow"],
        datasets: [
          {
            label: "My First Dataset",
            data: [300, 50, 100],
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
            hoverOffset: 4,
          },
        ],
      },
    });
  },
};
</script>
<style scoped>
.chart-wrapper {
  width: 6em;
  height: 6em;
}
</style>
