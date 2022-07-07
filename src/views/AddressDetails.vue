<template>
  <div id="addressDetails">
    <div class="container">
      <div class="row">
        <div class="col-md-11 text-start">
          <h3>Adresse {{ $route.params.hash }} :</h3>
        </div>
        <div class="col-md-1 text-end">
          <button v-on:click="addToWatchList()">
            <i class="fa-regular fa-star"></i>
          </button>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6 text-start">
          <p>Balance : {{ balance }} BNB</p>
        </div>
        <div class="col-md-6 text-end">
          <p>
            BNB Value :
            {{
              /* BNB value in $ is equals to: address value * current USD price */
              Math.floor(balance * currentDollarPrice)
            }}
            $
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col text-start">
          <h3>Transactions : <i>(à titre d'exemple)</i></h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-7 text-start">
          <p><b>Hash</b></p>
          <p>
            0xc55f5999ae2c46dc76e4678c4518d4d061dc5bf1af2059ff876eb643560280ec
          </p>
          <p>
            0x79bcb25c0095a925ecc98f80cfb0d59c4b9e29a15cdcb1febfcdfb0b414b158e
          </p>
          <p>
            0xda950181916e3b2f9db163419196b152a3f377bed57ec48682e87df8cbba7141
          </p>
        </div>
        <div class="col-md-2 text-start">
          <p><b>Block</b></p>
          <p>19338015</p>
          <p>19146782</p>
          <p>18946575</p>
        </div>
        <div class="col-md-2 text-start">
          <p><b>Value</b></p>
          <p>0.04 BNB</p>
          <p>1.45 BNB</p>
          <p>0.87 BNB</p>
        </div>
        <div class="col-md-1 text-start">
          <p><b>In/Out</b></p>
          <p>Out</p>
          <p>In</p>
          <p>Out</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertBalanceToBnB } from "../utils";
import axios from "axios";

const apiKey = "NEZNWWZRKRF54YSRV4Y961QA9GV4G53Y8S";

export default {
  name: "homeView",
  data() {
    return {
      balance: 0,
      currentDollarPrice: 0,
    };
  },
  computed: {
    tabWatchList() {
      return this.$root.tabWatchList;
    },
  },
  methods: {
    //Get BNB Balance for a Single Address via API
    getAPIBnbBalance() {
      axios
        .get(
          "https://api.bscscan.com/api?module=account&action=balance&address=" +
            this.$route.params.hash +
            "&apikey=" +
            apiKey
        )
        .then((response) => {
          this.balance = convertBalanceToBnB(response.data.result);
        });
    },
    //Get BNB Last Price via API
    getAPIBnbUSDPrice() {
      axios
        .get(
          "https://api.bscscan.com/api?module=stats&action=bnbprice&apikey=" +
            apiKey
        )
        .then((response) => {
          this.currentDollarPrice = response.data.result.ethusd;
        });
    },
    addToWatchList() {
      this.tabWatchList.push({
        value: this.balance,
        id: this.$route.params.hash,
      });
      this.$root.save();
      this.$router.push({
        name: "watchList",
      });
    },
  },
  mounted() {
    this.getAPIBnbBalance();
    this.getAPIBnbUSDPrice();
  },
};
</script>
