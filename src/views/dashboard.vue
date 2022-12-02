<template>
  <topNav />
  <div class="main-container d-flex">
    <div
      class="toggle-btn d-md-none d-block close-btn px-1 py-0"
      @click="isToggled = !isToggled"
    >
      <i class="fa fa-bars" aria-hidden="true"></i>
    </div>
    <div class="sidebar" v-if="isToggled">
      <div class="header-box">
        <Sidebar />
      </div>
    </div>
    <span class="bside" v-else></span>
    <div class="content">
      <dashboardContent />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import topNav from "@/components/topNav.vue";
import Sidebar from "../components/UI/sidebar.vue";
import dashboardContent from "../components/UI/dashboardContent.vue";

@Options({
  components: {
    topNav,
    Sidebar,
    dashboardContent,
  },
  data() {
    return {
      isToggled: true,
    };
  },
})
export default class dashboard extends Vue {}
</script>

<style scoped>
.toggle-btn {
  z-index: 99;
  color: black;
  font-size: 2em;
  position: relative;
  top: 0em;
  background: transparent;
}
.sidebar {
  background: #fff;
  min-width: 170px !important;
  max-width: 170px;
  min-height: 100vh;
  transition: all 0.3s;
  color: #858585;
  box-shadow: 2px 2px #85858555;
}

.bside {
  margin-left: -33px;
}
.header-box i {
  color: black;
  font-size: 1.5em;
}
.content {
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  background-color: #fff9fe;
  z-index: 0;
}

@media (max-width: 767px) {
  .sidebar {
    position: absolute;
    min-height: 100vh;
    z-index: 1;
  }
}
</style>
