<template>
  <div id="homeView">
    <h1>Bitblock - Home</h1>
    <input
      type="string"
      v-model="address"
      placeholder="Address Bsc (0x...)"
      v-on:keypress.enter="searchAddress()"
    />
    <button v-on:click="openDetailsAddress()">Search</button>
  </div>
</template>

<script>
export default {
  name: "homeView",
  props: ["bscAddress"],
  data() {
    return {
      message: "Hello Vue!",
    };
  },
  methods: {
    openDetailsAddress() {
      //Afficher les détails de l'adresse
      window.location.href = "/login";
    },
    showWatchList() {
      //Afficher la WatchList
    },
  },
};
</script>
