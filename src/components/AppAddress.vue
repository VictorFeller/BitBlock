<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <router-link v-bind:to="`/addressDetails/${a.id}`">{{
          a.id
        }}</router-link>
      </div>
      <div class="col-md-3">
        <!-- Old balance-->
        <p v-bind:to="tabWatchList">{{ a.value }} BNB</p>
      </div>
      <div class="col-md-3">
        <!-- New balance displayed in a certain color according to the balance change -->
        <p class="red" v-if="a.value > balance">{{ balance }} BNB</p>
        <p v-if="a.value === balance">{{ balance }} BNB</p>
        <p class="green" v-if="a.value < balance">{{ balance }} BNB</p>
      </div>
      <div class="col-md-1">
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
      // Current balance s'affichant parfois vide - cf. readme.md
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
    //Call the removeAddress() method from the parent (WatchList.vue)
    removeMe() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped>
.red {
  color: #e95420;
}
.green {
  color: #27d8b0;
}
</style>
