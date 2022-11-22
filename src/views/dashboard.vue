<template>
  <topNav />
  <div class="dashboard-wrapper">
    <div class="dashboard-container">
      <span>
        <i class="fa fa-angle-double-right" aria-hidden="true"></i>
      </span>
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="main-content">
        <div class="dsh-body-wrapper">
          <div class="dsh-right-title d-flex justify-content-between mb-3">
            <span class="fw-bold title-color">recent</span>
            <i class="fas fa-calendar-check-o"></i>
          </div>
          <div class="row">
            <div class="col-md-4 col-sm-12">
              <dashboardCard title="Total Number of Users" />
            </div>
            <div class="col-md-4 col-sm-12">
              <dashboardCard title="Total Number of Trade" />
            </div>
            <div class="col-md-4 col-sm-12">
              <dashboardCard title="Total Number of Transactions" />
            </div>
          </div>

          <div class="card my-5">
            <div class="card-body p-5">
              <div class="d-flex justify-content-between">
                <span class="fw-bold title-color"
                  >Conversion Rate to Naira</span
                >
                <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
              </div>
              <div
                class="d-flex flex-column flex-md-row justify-content-between py-5"
              >
                <div class="d-flex flex-column">
                  <span class="">iTunes Card</span>
                  <div class="table-container">
                    <iTunesRate />
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <span class="">Amazon Card</span>
                  <div class="table-container">
                    <iTunesRate />
                  </div>
                </div>
                <div class="d-flex flex-column">
                  <span class="">Bitcoin</span>
                  <div class="table-container">
                    <bitcoinRate />
                  </div>
                </div>
                <div class="icon">
                  <img
                    src="../assets/arrow.png"
                    alt="next"
                    class="img-responsive pt-md-5"
                    width="40"
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="card my-5">
            <div class="card-body p-5">
              <span class="fw-bold title-color">My Own Report</span>
              <div class="">
                <reportChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Sidebar from "../components/UI/sidebar.vue";
import topNav from "@/components/topNav.vue";
import dashboardCard from "@/components/UI/dashboardCard.vue";
import iTunesRate from "../components/UI/iTunesrate.vue";
import bitcoinRate from "../components/UI/bitcoinRate.vue";
import reportChart from "../components/UI/reportChart.vue";

@Options({
  components: {
    Sidebar,
    topNav,
    dashboardCard,
    iTunesRate,
    bitcoinRate,
    reportChart,
  },
})
export default class dashboard extends Vue {}
</script>

<style>
.dashboard-wrapper {
  background-color: #fff9fe;
}

.dashboard-container {
  display: grid;
  grid-template-columns: 20% auto;
}

.dashboard-container span {
  display: none;
}

.dsh-body-wrapper {
  padding: 2em 2em;
}

.table-container {
  margin-left: -0.5em;
}

.title-color {
  color: #858585;
}

.icon {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: center;
}

@media (max-width: 970px) {
  /* .sidebar {
    width: 9rem;
    z-index: 99;
  } */

  .dashboard-container span {
    display: block;
  }
}
</style>
