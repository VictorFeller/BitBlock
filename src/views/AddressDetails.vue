<template>
  <div id="addressDetails">
    <h1 v-bind:to="'/homeView/${bscAddress}'">address:</h1>
    <h1 v-bind:bscAddress="message">hi</h1>
    <p>Balance</p>
    <p>List des transactions</p>
    <button v-on:click="loadBnbBalance()">loadBnbBalance</button>
  </div>
</template>

<script>
import axios from "axios";

const apiKey = "NEZNWWZRKRF54YSRV4Y961QA9GV4G53Y8S";
//const tmpAddress = "0xB83C03D2C334224e3475C3D930e556E668284Eb0";
const tmpAddress = "0x8cb87f84814e05e17c609f96978556698dfea578";

export default {
  name: "homeView",
  methods: {
    loadBnbBalance() {
      axios
        .get(
          "https://api.bscscan.com/api?module=account&action=balance&address=" +
            tmpAddress +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          //TODO optomiser l'appel de la fonction convertToBnb()
          //const amountBnb = response.data.result;
          //console.log(this.convertToBnB(amountBnb));
          console.log(response.data.result / 10e17);
        });
    },
  },
  convertToBnB(amoundBnb) {
    const divideFactor = 10e17;
    return amoundBnb / divideFactor;
  },
  created() {
    // or mounted
    this.loadData();
  },
};
</script>
