<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-start">
        <p class="navbar-item">Bem vindo {{ getFullName }}</p>
        <p class="navbar-item">Seu token é: {{ getToken }}</p>
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
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("home", ["getFullName", "getToken"])
  },
  methods: {
    ...mapActions("auth", ["logout"]),
    async exit() {
      await this.logout();
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss"></style>
