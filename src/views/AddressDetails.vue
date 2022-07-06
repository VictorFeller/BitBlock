<template>
  <div id="addressDetails">
    <h1>Adresse {{ $route.params.hash }}</h1>
    <p>Balance</p>
    <p>List des transactions</p>
  </div>
</template>

<script>
import axios from "axios";

const apiKey = "NEZNWWZRKRF54YSRV4Y961QA9GV4G53Y8S";
export default {
  name: "homeView",
  methods: {
    loadBnbBalance() {
      axios
        .get(
          "https://api.bscscan.com/api?module=account&action=balance&address=" +
            this.$route.params.hash +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          //TODO optomiser l'appel de la fonction convertToBnb()
          console.log(response.data.result / 10e17);
        });
    },
  },
  convertToBnB(amoundBnb) {
    const divideFactor = 10e17;
    return amoundBnb / divideFactor;
  },
  mounted() {
    // or mounted
    this.loadBnbBalance();
  },
};
</script>
