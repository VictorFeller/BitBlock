<template>
  <div class="container" id="homeView">
    <div class="container-md">
      <div class="row">
        <div class="col">
          <img
            class="fit-picture"
            src="../assets/BNB-logo.png"
            alt="BitBlockLogo"
          />
        </div>
      </div>
      <div class="row">
        <div class="row">
          <h1>BitBlock</h1>
        </div>
      </div>

      <div class="row">
        <div class="input-group-md-12">
          <input
            class="form-control-md-12"
            type="string"
            v-model="bscAddress"
            placeholder="Enter a BSC address (0x...)"
            just
            v-on:keypress.enter="openDetailsAddress()"
          />

          <div class="input-group-append" id="searchButton">
            <button
              class="btn btn-light"
              v-on:click="openDetailsAddress()"
              v-bind:disabled="!this.canSearch"
            >
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
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
      const bscAddress = this.bscAddress;
      return !(bscAddress === undefined);
    },
  },
  methods: {
    openDetailsAddress() {
      if (this.canSearch) {
        //Redirect to the address details page
        this.$router.push({
          name: "addressDetails",
          params: { hash: this.bscAddress },
        });
      }
    },
  },
};
</script>

<style scoped>
input {
  width: 40vw;
}
::-webkit-input-placeholder {
  text-align: center;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 75vh;
}

#searchButton {
  margin-top: 5px;
}
h1 {
  font-size: 4vw;
}
img {
  width: 9vw;
}
</style>
