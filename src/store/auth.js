import { get, postUrlEncoded } from "@/utils/service";

const headers = {
  "Content-Type": "application/x-www-form-urlencoded",
  Authorization: `Basic ${btoa(
    "WHO_IS_MINE_BEAUTY_FRONTEND_APPLICATION:YOU_IS"
  )}`
};

export default {
  namespaced: true,
  state: {
    oauth: {},
    error: ""
  },
  actions: {
    async login({ commit }, form) {
      const { data } = await postUrlEncoded(
        "oauth/token",
        { ...form, grant_type: "password" },
        headers
      );

      commit("save_token", data);
    },
    async logout({ commit }) {
      await get("oauth/logout");

      commit("remove_token");
    },
    async setError({ commit }, error) {
      commit("setError", error);

      setTimeout(() => {
        commit("setError", "");
      }, 3000);
    }
  },
  mutations: {
    save_token(state, oauth) {
      state.oauth = oauth;
    },
    remove_token(state) {
      delete state.oauth;
    },
    setError(state, error) {
      state.error = error;
    }
  },
  getters: {
    getError(state) {
      return state.error;
    }
  }
};
