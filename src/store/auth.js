import { get, postUrlEncoded, post } from "@/utils/service";

export default {
  namespaced: true,
  state: {
    oauth: {},
    error: ""
  },
  actions: {
    async login({ commit }, form) {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${btoa(
          "WHO_IS_MINE_BEAUTY_FRONTEND_APPLICATION:YOU_IS"
        )}`
      };

      const { data } = await postUrlEncoded(
        "oauth/token",
        { ...form, grant_type: "password" },
        headers
      );

      if (data) {
        commit("save_token", data);
      } else {
        throw new Error("Email ou senha incorretos");
      }
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
    },
    // eslint-disable-next-line no-unused-vars
    async signUp({ commit }, form) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          "WHO_IS_MINE_BEAUTY_FRONTEND_APPLICATION:YOU_IS"
        )}`
      };

      const { data } = await post("user", { ...form }, headers);

      if (!data) {
        throw new Error("Erro na criação do usuário. Tente novamente.");
      }
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
