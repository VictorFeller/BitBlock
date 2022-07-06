<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5"><p>Address</p></div>
      <div class="col-md-6"><p>Balance</p></div>
      <div class="col-md-1"><button v-on:click="removeMe()">x</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppAddress",
  props: ["m"],
  methods: {
    removeMe() {
      this.$emit("remove");
    },
  },
};
</script>

<style scoped></style>
