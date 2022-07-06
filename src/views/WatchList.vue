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
      <div class="row">
        <div class="col-md-4">
          <h3>Address (BSC)</h3>
        </div>
        <div class="col-md-3">
          <h3>Old balance</h3>
        </div>
        <div class="col-md-3">
          <h3>Current balance</h3>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <div class="container"></div>
    <div>
      <transition-group name="flip-list">
        <app-address
          v-for="address in sortedWatchlist"
          v-bind:a="address"
          v-bind:key="address.id"
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
    sortedWatchlist() {
      if (this.sortOrder === "top") {
        const copy = this.tabWatchList.slice(0);
        copy.sort((a, b) => {
          return b.value - a.value;
        });
        return copy;
      }
      return this.tabWatchList;
    },
  },
  methods: {
    removeAddress(address) {
      const index = this.tabWatchList.indexOf(address);
      this.tabWatchList.splice(index, 1)[0];
      this.$root.save();
    },
  },
};
</script>

<style>
label {
  margin: 10px;
}
.flip-list-move {
  transition: transform 1s;
}
</style>
