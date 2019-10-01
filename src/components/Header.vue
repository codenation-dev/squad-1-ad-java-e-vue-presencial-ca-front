<template>
  <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-start">
        <p class="navbar-item">Bem vindo XPTO USER!</p>

        <p class="navbar-item">Seu token é: qwerty123456</p>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light" @click="exit">Log out</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  methods: {
    ...mapActions("auth", ["logout"]),
    async exit() {
      // try {
      await this.logout();
      this.$router.push({ name: "login" });
      // } catch (error) {}
    }
  }
};
</script>

<style lang="scss"></style>
