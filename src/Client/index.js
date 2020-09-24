import Vue from "vue";
import Layout from "./components/Layout.vue";
import router from "./router";
import axios from 'axios'
import VueAxios from 'vue-axios'
import "bootstrap/dist/css/bootstrap.min.css";
import "./public/stylesheets/style.css"
Vue.use(VueAxios,axios)
new Vue({
  router,
  render: (h) => h(Layout),
}).$mount("#app");
