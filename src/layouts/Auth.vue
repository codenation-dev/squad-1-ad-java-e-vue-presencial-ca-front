<template>
  <div class="columns">
    <div class="column is-3 is-offset-2">
      <div class="logo login-content">
        <picture>
          <img src="@/assets/img/logo.png" alt="Logo Logs One" />
        </picture>
      </div>
      <div class="is-flex description-login">
        <h1 class="title">Bem vindo a Logs One.</h1>
        <p>
          Plataforma de consulta e acesso de logs de maneira intuitiva e eficaz.
        </p>
      </div>
    </div>
    <div class="column is-4 is-offset-1">
      <div class="card">
        <slot></slot>
      </div>

      <Notification v-if="getError" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Notification from "@/components/Notification";

export default {
  computed: {
    ...mapGetters("auth", ["getError"])
  },
  components: {
    Notification
  }
};
</script>

<style lang="scss">
@import "@/theme.scss";

.card {
  margin-bottom: 10vh;
}

.description-login {
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.login-content {
  margin-top: 20vh;

  @media (max-width: 768px) {
    margin-top: 5vh;
  }
}

.login-buttons {
  display: flex;
  justify-content: space-evenly;
}

.logo {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
