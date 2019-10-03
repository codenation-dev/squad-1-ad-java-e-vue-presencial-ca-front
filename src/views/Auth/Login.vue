<template>
  <Auth>
    <form @submit.prevent="submit(form)" autocomplete="off">
      <div class="card-content login-content">
        <Input
          v-model="form.email"
          label="Email"
          type="text"
          placeholder="Email"
          autocomplete="off"
        />
        <span v-if="emailPatternError" class="help is-danger">
          {{ emailPatternError }}
        </span>

        <Input
          v-model="form.password"
          label="Senha"
          type="password"
          placeholder="Senha"
          autocomplete="off"
        />
        <span v-if="passwordPatternError" class="help is-danger">
          {{ passwordPatternError }}
        </span>

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
import {
  email,
  maxLength,
  minLength,
  required
} from "vuelidate/lib/validators";
import { mapActions } from "vuex";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Auth from "@/layouts/Auth";

const generalValidate = {
  required,
  minLength: minLength(6),
  maxLength: maxLength(60)
};

export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      },
      error: false,
      messageError: ""
    };
  },
  computed: {
    passwordPatternError() {
      const { $invalid, $anyDirty } = this.$v.form.password;
      return $invalid && $anyDirty
        ? "Campo obrigatório e com mínimo de 6 caracteres"
        : undefined;
    },
    emailPatternError() {
      const { $invalid, $anyDirty } = this.$v.form.email;
      return $invalid && $anyDirty
        ? "Campo com formato de email obrigatório"
        : undefined;
    }
  },
  validations: {
    form: {
      email: { ...generalValidate, email },
      password: { ...generalValidate }
    }
  },
  components: {
    Auth,
    Button,
    Input
  },
  methods: {
    ...mapActions("auth", ["login", "setError"]),
    async submit(form) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      try {
        await this.login(form);

        this.$router.push({ name: "home" });
      } catch (error) {
        this.setError(error.message);
      }
    }
  }
};
</script>
