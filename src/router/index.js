import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import WatchList from "../views/WatchList.vue";
import AddressDetails from "../views/AddressDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/watchList",
    name: "watchList",
    component: WatchList,
  },
  {
    path: "/addressDetails/:hash",
    name: "addressDetails",
    component: AddressDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
