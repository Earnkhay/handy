<template>
  <div class="chart-wrapper">
    <canvas id="myTransactionChart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";

export default {
  name: "doughnutTransactionsChart",
  mounted() {
    const ctxTransaction = document.getElementById("myTransactionChart");

    new Chart(ctxTransaction, {
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
