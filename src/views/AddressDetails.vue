<template>
  <div id="addressDetails">
    <div class="container">
      <div class="row">
        <div class="col-md-6 text-start">
          <p>Adresse: {{ $route.params.hash }}</p>
        </div>
        <div class="col-md-6 text-end">
          <!--<button>Add to WatchList</button>-->
          <i class="fa-regular fa-star"></i>
        </div>
      </div>
      <div class="row border">
        <div class="col-md-12 text-start">
          <p>Overview:</p>
        </div>
      </div>
      <div class="row border">
        <div class="col-md-6 text-start">
          <p>Balance: {{ balance }}</p>
        </div>
        <div class="col-md-6 text-end">
          <p>
            BNB Value:
            {{
              /* BNB value in $ is equals to: address value * current USD price */
              Math.floor(balance * currentDollarPrice)
            }}$
          </p>
        </div>
      </div>
      <div class="row border">
        <div class="col-md-12 text-start">
          <p>Transactions.....</p>
        </div>
      </div>
      <div class="row border">
        <div class="col-md-3 text-start">
          <p>Hash</p>
        </div>
        <div class="col-md-3 text-start">
          <p>Block</p>
        </div>
        <div class="col-md-3 text-start">
          <p>Value</p>
        </div>
        <div class="col-md-3 text-start">
          <p>In/Out</p>
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
      balance: undefined,
      currentDollarPrice: undefined,
    };
  },
  computed: {},
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
  },
  mounted() {
    // or mounted
    this.getAPIBnbBalance();
    this.getAPIBnbUSDPrice();
  },
};
</script>
