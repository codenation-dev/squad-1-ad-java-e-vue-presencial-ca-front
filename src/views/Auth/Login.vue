<template>
  <Auth>
    <form @submit.prevent="submit(form)">
      <div class="card-content login-content">
        <Input
          v-model="form.username"
          label="Email"
          type="text"
          placeholder="Email"
        />
        <Input
          v-model="form.password"
          label="Senha"
          type="password"
          placeholder="Senha"
        />

        <div class="login-buttons">
          <Button class="has-text-centered" label="Enviar" isPrimary />
          <router-link :to="{ name: 'register' }">
            <Button
              class="has-text-centered"
              label="Cadastrar"
              isOutlined
              isPrimary
            />
          </router-link>
        </div>
      </div>
    </form>
  </Auth>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";
import Auth from "@/layouts/Auth";

import { mapActions } from "vuex";

export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      error: false,
      messageError: ""
    };
  },
  components: {
    Auth,
    Button,
    Input
  },
  methods: {
    ...mapActions("auth", ["login", "setError"]),
    async submit(form) {
      try {
        await this.login(form);
        this.$router.push({ name: "home" });
      } catch (error) {
        console.log(JSON.stringify(error));
        this.setError(error.message);
      }
    }
  }
};
</script>
