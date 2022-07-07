<template>
  <div id="watchList">
    <div class="container">
      <div class="row">
        <div class="col">
          Sort old balance by :
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
      <div class="row">
        <div class="col-md-5">
          <h3>Address (BSC)</h3>
        </div>
        <div class="col-md-3">
          <h3>Old balance</h3>
        </div>
        <div class="col-md-3">
          <h3>Current balance</h3>
        </div>
        <div class="col-md-1">
          <button v-on:click="refreshPage()">
            <i class="fa fa-refresh" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
    <div>
      <transition-group name="flip-list">
        <app-address
          v-for="address in sortedWatchlist"
          v-bind:a="address"
          v-bind:key="address.id"
          v-on:refresh="refreshPage()"
          v-on:remove="removeAddress(address)"
        ></app-address>
      </transition-group>
    </div>
  </div>
</template>

<script>
import AppAddress from "../components/AppAddress.vue";
export default {
  name: "watchList",
  components: {
    "app-address": AppAddress,
  },
  data() {
    return {
      sortOrder: "recent",
    };
  },
  computed: {
    tabWatchList() {
      return this.$root.tabWatchList;
    },
    //Sort the watchlist by old balance (recent adds or amount of BNB)
    sortedWatchlist() {
      if (this.sortOrder === "top") {
        const copy = this.tabWatchList.slice(0); //Create a copy of the current watchlist
        copy.sort((a, b) => {
          return b.value - a.value;
        });
        return copy;
      }
      return this.tabWatchList;
    },
  },
  methods: {
    //Remove address from the localStorage which involves disappearing in the watchlist page
    removeAddress(address) {
      const index = this.tabWatchList.indexOf(address);
      this.tabWatchList.splice(index, 1)[0];
      this.$root.save(); //Call save() method in the main.js
    },
    refreshPage() {
      window.location.reload();
    },
  },
};
</script>

<style>
label {
  margin: 10px;
}
.flip-list-move {
  transition: transform 0.5s;
}
</style>
