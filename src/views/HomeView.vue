<template>
  <div id="homeView">
    <h1>Bitblock - Home</h1>
    <input
      type="string"
      v-model="bscAddress"
      placeholder="Address Bsc (0x...)"
      v-on:keypress.enter="openDetailsAddress()"
    />
    <router-link v-bind:to="'/addressDetails'"
      ><button v-on:click="openDetailsAddress()">Search</button></router-link
    >
  </div>
</template>

<script>
export default {
  name: "homeView",
  data() {
    return {
      bscAddress: "1234",
    };
  },
  methods: {
    openDetailsAddress() {
      //Afficher les détails de l'adresse
      const bscAddress = this.bscAddress;
      this.$emit("add", bscAddress);
      //this.bscAddress = undefined;
      //window.location.href = "#/addressDetails";
    },
    showWatchList() {
      //Afficher la WatchList
    },
  },
};
</script>
