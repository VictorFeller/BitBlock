<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <router-link v-bind:to="`/addressDetails/${a.id}`">{{
          a.id
        }}</router-link>
      </div>
      <div class="col-md-3">
        <p v-bind:to="tabWatchList">{{ a.value }} BNB</p>
      </div>
      <div class="col-md-3">
        <p class="red" v-if="a.value > balance">{{ balance }} BNB</p>
        <p v-if="a.value === balance">{{ balance }} BNB</p>
        <p class="green" v-if="a.value < balance">{{ balance }} BNB</p>
      </div>
      <div class="col-md-2">
        <button v-on:click="refreshMe()">
          <i class="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button v-on:click="removeMe()">x</button>
      </div>
    </div>
  </div>
</template>

<script>
import { convertBalanceToBnB } from "../utils";
import axios from "axios";

const apiKey = "NEZNWWZRKRF54YSRV4Y961QA9GV4G53Y8S";

export default {
  name: "AppAddress",
  data() {
    return {
      balance: this.getAPIBnbBalance(),
    };
  },
  props: ["a"],
  computed: {
    tabWatchList() {
      return this.$root.tabWatchList;
    },
  },
  methods: {
    getAPIBnbBalance() {
      axios
        .get(
          "https://api.bscscan.com/api?module=account&action=balance&address=" +
            this.a.id +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          this.balance = convertBalanceToBnB(response.data.result);
        });
    },
    removeMe() {
      this.$emit("remove");
    },
    openDetailsAddress() {
      this.$router.push({
        name: "addressDetails",
        params: {},
      });
    },
    refreshMe() {
      this.getAPIBnbBalance();
    },
  },
};
</script>

<style scoped>
.red {
  color: rgb(240, 0, 0);
}
.green {
  color: rgb(0, 255, 0);
}
</style>
