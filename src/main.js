import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "./main.css";
//import "bootswatch/dist/simplex/bootstrap.min.css";

Vue.config.productionTip = false;

const LOCALSTORAGE_WATCHLIST_KEY = "tabWatchListKey";

new Vue({
  data() {
    return {
      tabWatchList: [],
    };
  },
  mounted() {
    const json = localStorage.getItem(LOCALSTORAGE_WATCHLIST_KEY);
    if (json) {
      this.tabWatchList = JSON.parse(json);
    }
  },
  methods: {
    save() {
      localStorage.setItem(
        LOCALSTORAGE_WATCHLIST_KEY,
        JSON.stringify(this.tabWatchList)
      );
    },
  },
  router,
  render: (h) => h(App),
}).$mount("#app");
