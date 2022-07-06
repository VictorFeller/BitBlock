<template>
  <div id="homeView">
    <h1>Bitblock - Home</h1>
    <input
      type="string"
      v-model="bscAddress"
      placeholder="Address Bsc (0x...)"
      v-on:keypress.enter="openDetailsAddress()"
    />
    <button v-on:click="openDetailsAddress()" v-bind:disabled="!this.canSearch">
      Search
    </button>
  </div>
</template>

<script>
export default {
  name: "homeView",
  data() {
    return {
      bscAddress: undefined,
    };
  },
  computed: {
    canSearch() {
      //TODO: Vérifie pattern adresse du type 0x....
      const bscAddress = this.bscAddress;
      return !(bscAddress === undefined);
    },
  },
  methods: {
    openDetailsAddress() {
      if (this.canSearch) {
        //Afficher les détails de l'adresse
        //const bscAddress = this.bscAddress;
        //this.$emit("add", bscAddress);
        this.$router.push({
          name: "addressDetails",
          params: { hash: this.bscAddress },
        });
      }
    },
  },
};
</script>
