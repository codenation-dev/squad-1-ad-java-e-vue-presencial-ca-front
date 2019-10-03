import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

import auth from "./auth";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    new VuexPersistence({ storage: global.localStorage, key: "state" }).plugin
  ],
  modules: {
    auth,
    home: {
      mutations: {
        delete_user_info(state) {
          delete state.userInfo;
        }
      }
    }
  }
});
