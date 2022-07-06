<template>
  <div id="watchList">
    <div class="container">
      <div class="row">
        <div class="col">
          <label>
            Recents adds
            <input
              type="radio"
              value="recent"
              name="sort"
              v-model="sortOrder"
            />
          </label>
          <label>
            Amount of BNB
            <input type="radio" value="top" name="sort" v-model="sortOrder" />
          </label>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h3>Address (BSC)</h3>
        </div>
        <div class="col-md-6">
          <h3>Balance (BNB)</h3>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <p>0x9F8cCdaFCc39F3c7D6EBf637c9151673CBc36b88</p>
        </div>
        <div class="col-md-6">
          <p>0.03</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "watchList",
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

<style>
label {
  margin: 10px;
}
</style>
