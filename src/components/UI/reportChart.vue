<template>
  <div class="chart-wrapper">
    <canvas id="reportChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "reportChart",
  mounted() {
    const ctxReport = document.getElementById("reportChart");

    new Chart(ctxReport, {
      type: "bar",
      data: {
        labels: [
          "Amazon",
          "Google",
          "iTunes",
          "Payoneer",
          "Bitcoin",
          "Ethenum",
          "Techno",
          "Paypal",
          "Alixpress",
          "Konga",
          "Jumia",
        ],
        datasets: [
          {
            label: "Average Score",
            data: [12, 19, 3, 5, 2, 3, 12, 3, 6, 8, 9],
            borderWidth: 1,
            backgroundColor: ["rgba(256, 116, 115, 0.7)"],
            borderRadius: 20,
            fill: "+2",
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
<style scoped>
.chart-wrapper {
  width: 55em;
  /* height: 24em; */
}

@media (max-width: 400px) {
  .chart-wrapper {
    width: 15em;
    height: 10em;
  }
}
</style>
