import Vue from "vue";
import Buefy from "buefy";
import axios from "axios";
import NProgress from "nprogress";
import Vuelidate from "vuelidate";

import {
  faSearch,
  faArrowUp,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

import router from "./router";
import App from "./App.vue";
import interceptor from "@/utils/interceptor";
import store from "@/store/index";

axios.interceptors.request.use(interceptor);
axios.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

axios.interceptors.response.use(
  response => {
    NProgress.done();
    return response;
  },
  () => NProgress.done()
);

library.add(faSearch, faArrowDown, faArrowUp);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Vuelidate);
Vue.use(Buefy, {
  defaultIconComponent: "vue-fontawesome",
  defaultIconPack: "fas"
});

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
