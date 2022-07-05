import Vue from "vue";
import App from "./App.vue";
import router from "./router";
//import "bootstrap";
//import "bootstrap/dist/css/bootstrap.min.css";
//import "@fortawesome/fontawesome-free/css/all.min.css";
//import "./main.css";
//import "bootswatch/dist/simplex/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
