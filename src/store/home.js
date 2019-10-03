import { get } from "@/utils/service";

export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  actions: {
    async getUser({ commit }) {
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(
          "WHO_IS_MINE_BEAUTY_FRONTEND_APPLICATION:YOU_IS"
        )}`
      };

      const data = await get("user/me", headers);

      if (data) {
        commit("save_user_info", data);
        return data;
      } else {
        throw new Error("Houve algum erro na busca.");
      }
    }
  },
  mutations: {
    save_user_info(state, user) {
      state.userInfo = user;
    }
  },
  getters: {
    getUserInfo(state) {
      return state.userInfo;
    },
    getFullName(state) {
      const { firstName, lastName } = state.userInfo.data;
      return `${firstName} ${lastName}`;
    },
    getToken(state) {
      return state.userInfo.data.id;
    }
  }
};
