<template>
  <Auth>
    <form @submit.prevent="submit(form)">
      <div class="card">
        <div class="card-content login">
          <Input
            v-model="form.firstName"
            label="Nome"
            type="text"
            placeholder="Nome"
          />
          <span v-if="firstNamePatternError" class="help is-danger">
            {{ firstNamePatternError }}
          </span>
          <Input
            v-model="form.lastName"
            label="Sobrenome"
            type="text"
            placeholder="Sobrenome"
          />
          <span v-if="lastNamePatternError" class="help is-danger">
            {{ lastNamePatternError }}
          </span>
          <Input
            v-model="form.email"
            label="Email"
            type="text"
            placeholder="Email"
          />
          <span v-if="emailPatternError" class="help is-danger">
            {{ emailPatternError }}
          </span>
          <Input
            v-model="form.password"
            label="Senha"
            type="password"
            placeholder="Senha"
            :error="passwordPatternError"
          />
          <span v-if="passwordPatternError" class="help is-danger">
            {{ passwordPatternError }}
          </span>
          <Input
            v-model="form.passwordConfirm"
            label="Confirme sua senha"
            type="password"
            placeholder="Confirme sua senha"
          />
          <span v-if="passwordConfirmPatternError" class="help is-danger">
            {{ passwordConfirmPatternError }}
          </span>

          <div class="login-buttons">
            <Button class="has-text-centered" label="Enviar" isPrimary />
            <router-link :to="{ name: 'login' }">
              <Button class="back" label="Voltar" isOutlined isPrimary />
            </router-link>
          </div>
        </div>
      </div>
    </form>
  </Auth>
</template>

<script>
import { mapActions } from "vuex";
import {
  email,
  maxLength,
  minLength,
  required,
  sameAs
} from "vuelidate/lib/validators";

import Input from "@/components/Input";
import Button from "@/components/Button";
import Auth from "@/layouts/Auth";

const generalValidate = {
  required,
  minLength: minLength(3),
  maxLength: maxLength(60)
};

export default {
  components: {
    Button,
    Input,
    Auth
  },
  data() {
    return {
      form: {
        firstName: "",
        lastName: "",
        password: "",
        passwordConfirm: "",
        email: ""
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
        : null;
    },
    emailPatternError() {
      const { $invalid, $anyDirty } = this.$v.form.email;
      return $invalid && $anyDirty
        ? "Campo com formato de email obrigatório"
        : undefined;
    },
    firstNamePatternError() {
      const { $invalid, $anyDirty } = this.$v.form.firstName;
      return $invalid && $anyDirty ? "Campo nome é obrigatório" : undefined;
    },
    lastNamePatternError() {
      const { $invalid, $anyDirty } = this.$v.form.lastName;
      return $invalid && $anyDirty
        ? "Campo obrigatório e com mínimo de 6 caracteres"
        : undefined;
    },
    passwordConfirmPatternError() {
      const { $invalid, $anyDirty } = this.$v.form.passwordConfirm;
      return $invalid && $anyDirty
        ? "Campos senha não correspondem"
        : undefined;
    }
  },
  validations: {
    form: {
      firstName: { ...generalValidate },
      lastName: { ...generalValidate },
      email: { ...generalValidate, email },
      password: { ...generalValidate },
      passwordConfirm: {
        ...generalValidate,
        sameAsPassword: sameAs("password")
      }
    }
  },
  methods: {
    ...mapActions("auth", ["login", "signUp", "setError"]),
    async submit(form) {
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }

      try {
        delete form.passwordConfirm;
        await this.signUp(form);

        this.$router.push({ name: "login" });
      } catch (error) {
        this.setError(error);
      }
    }
  }
};
</script>

<style lang="scss">
.login {
  margin-top: 10vh;
}

.login-buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
