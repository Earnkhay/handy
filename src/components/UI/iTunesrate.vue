<template>
  <table class="table table-borderless">
    <tbody class="rate-size">
      <tr :key="iTune.id" v-for="iTune in iTunes">
        <td>{{ iTune.text }}</td>
        <td>{{ iTune.price }}</td>
      </tr>
    </tbody>
  </table>
</template>
<script>
import { Options, Vue } from "vue-class-component";
@Options({
  components: {},
  data() {
    return {
      iTunes: [],
    };
  },
  created() {
    this.iTunes = [
      {
        id: 1,
        text: "USA Physical",
        price: "N400.00",
      },
      {
        id: 2,
        text: "USA E-Code Card",
        price: "N400.00",
      },
      {
        id: 1,
        text: "USA Physical Card",
        price: "N400.00",
      },
      {
        id: 1,
        text: "USA E-code Card",
        price: "N400.00",
      },
    ];
  },
})
export default class iTunesRate extends Vue {}
</script>
<style>
.rate-size {
  font-size: 12px;
  color: #858585;
}
</style>
