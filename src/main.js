import Vue from "vue";
import Buefy from "buefy";
import axios from "axios";

import router from "./router";
import App from "./App.vue";
import interceptor from "@/utils/interceptor";

axios.interceptors.request.use(interceptor);

Vue.use(Buefy);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
