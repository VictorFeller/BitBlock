<template>
  <div id="homeView">
    <h1>Bitblock - Home</h1>
    <input
      type="string"
      v-model="address"
      placeholder="Address Bsc (0x...)"
      v-on:keypress.enter="searchAddress()"
    />
    <button v-on:click="searchAddress()">Search</button>
  </div>
</template>

<script>
export default {
  name: "homeView",
  methods: {
    searchAddress() {
      //Effectue la recherche
    },
    showWatchList() {
      //Afficher la WatchList
    },
  },
};
</script>
