<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-start">
        <p v-show="fullName" class="navbar-item">Bem vindo {{ fullName }}</p>
        <p v-show="token" class="navbar-item">Seu token é: {{ token }}</p>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="exit">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

import { get } from "@/utils/service.js";

export default {
  data() {
    return {
      fullName: "",
      token: ""
    };
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async getInfo() {
      if (!this.firstName || !this.lastName) {
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Basic ${btoa(
            "WHO_IS_MINE_BEAUTY_FRONTEND_APPLICATION:YOU_IS"
          )}`
        };

        const { data } = await get("user/me", headers);
        if (data) {
          localStorage.setItem("userInfo", JSON.stringify(data));
          this.fullName = `${data.firstName} ${data.lastName}`;
          this.token = data.id;
        } else {
          throw new Error("Houve algum erro na busca.");
        }
      }
    },
    async exit() {
      await this.logout();
      this.$router.push({ name: "login" });
    }
  },
  async created() {
    await this.getInfo();
  }
};
</script>

<style lang="scss" scoped>
@import "@/theme.scss";

.navbar-item {
  color: $white;
}
</style>
