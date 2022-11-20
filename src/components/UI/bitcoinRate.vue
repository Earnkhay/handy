<template>
  <table class="table table-borderless">
    <tbody class="rate-size">
      <tr :key="bitcoin.id" v-for="bitcoin in bitcoins">
        <td>{{ bitcoin.text }}</td>
        <td>{{ bitcoin.price }}</td>
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
      bitcoins: [],
    };
  },
  created() {
    this.bitcoins = [
      {
        id: 1,
        text: "Bitcoin BTC",
        price: "N400.00",
      },
      {
        id: 2,
        text: "Bitcoin BTC",
        price: "N400.00",
      },
      {
        id: 1,
        text: "Bitcoin BTC",
        price: "N400.00",
      },
      {
        id: 1,
        text: "Bitcoin BTC",
        price: "N400.00",
      },
    ];
  },
})
export default class bitcoinRate extends Vue {}
</script>
<style>
.rate-size {
  font-size: 12px;
  color: #858585;
}
</style>
