<template>
  <div class="sidebar-container">
    <div class="sidebar-wrapper">
      <ul>
        <li :key="link.id" v-for="link in links">
          <i :class="['fas', link.icon]"></i>
          {{ link.text }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  data() {
    return {
      links: [],
    };
  },
  created() {
    this.links = [
      {
        id: 1,
        text: "Overview",
      },
      {
        id: 2,
        text: "Projects",
      },
      {
        id: 3,
        text: "Wallet",
      },
      {
        id: 4,
        text: "Calender",
      },
      {
        id: 5,
        text: "Invoice",
      },
      {
        id: 6,
        text: "Settings",
      },
      {
        id: 7,
        text: "Logout",
      },
    ];
  },
})
export default class Sidebar extends Vue {}
</script>
<style>
.sidebar-container {
  width: 100%;
  background-color: #fff;
  color: #000;
  height: 100vh;
  overflow: hidden;
}

.sidebar-wrapper {
  padding: 1em;
  display: flex;
}
.fas {
  padding-right: 0.6em;
}
li {
  list-style: none;
  display: flex;
  padding: 0.7em 0;
  cursor: pointer;
}

li.active {
  background-color: black;
}

@media (min-width: 320px) {
  .sidebar-container {
    /* width: 2rem; */
  }
}
</style>
