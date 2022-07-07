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
        <p class="red" v-if="a.value > balance">{{ balance }} BNB</p>
        <p v-if="a.value === balance">{{ balance }} BNB</p>
        <p class="green" v-if="a.value < balance">{{ balance }} BNB</p>
      </div>
      <div class="col-md-1">
        <button v-on:click="replaceOldBalance()">
          <i class="fa-solid fa-floppy-disk"></i>
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
    updateBalanceByAdd(address) {
      axios
        .get(
          "https://api.bscscan.com/api?module=account&action=balance&address=" +
            address +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          return convertBalanceToBnB(response.data.result); //On obtient bien la réponse de l'API
        });
    },
    replaceOldBalance() {
      /*console.log(this.tabWatchList[0].id);
      const copyTab = this.tabWatchList.slice(0);
      for (let index = 0; index < copyTab.length; index++) {
        //Cet appel ne marche pas ! --> undefined
        let tmp = this.updateBalanceByAdd(copyTab[index].id);
        console.log("tmp" + tmp);
        copyTab[index].value = tmp;
        localS torage.setItem("tabWatchListKey", copyTab);
      }*/
    },
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
