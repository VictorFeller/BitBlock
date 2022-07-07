<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/watchList">Watch List</router-link>
    </nav>
    <p>
      <b>1 BNB = {{ currentDollarPrice }}$</b>
    </p>
    <router-view />
  </div>
</template>

<script>
import axios from "axios";
const apiKey = "NEZNWWZRKRF54YSRV4Y961QA9GV4G53Y8S";

export default {
  name: "App",
  data() {
    return {
      currentDollarPrice: 0,
    };
  },
  methods: {
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
    this.getAPIBnbUSDPrice();
  },
};
</script>

<style>
p {
  font: bold;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #e95420;
}
</style>
