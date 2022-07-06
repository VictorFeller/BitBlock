<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5">
        <router-link v-bind:to="`/addressDetails/${a.id}`">{{
          a.id
        }}</router-link>
      </div>
      <div class="col-md-6">
        <p v-bind:to="tabWatchList">{{ a.value }}</p>
      </div>
      <div class="col-md-1">
        <button v-on:click="removeMe()">x</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAddress",
  props: ["a"],
  computed: {
    tabWatchList() {
      return this.$root.tabWatchList;
    },
  },
  methods: {
    removeMe() {
      this.$emit("remove");
    },
    openDetailsAddress() {
      this.$router.push({
        name: "addressDetails",
        params: {},
      });
    },
  },
};
</script>

<style scoped></style>
