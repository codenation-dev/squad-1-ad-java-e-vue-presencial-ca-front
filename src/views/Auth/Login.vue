<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div class="card">
        <div class="card-content login">
          <Input label="Email" type="text" placeholder="Email" />
          <Input label="Senha" type="text" placeholder="Senha" />

          <div class="login-buttons">
            <router-link :to="{ name: 'register' }">
              <Button
                class="has-text-centered"
                label="Cadastrar"
                isOutlined
                isPrimary
              />
            </router-link>
            <Button class="has-text-centered" label="Enviar" isPrimary />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input";
import Button from "@/components/Button";

export default {
  components: {
    Button,
    Input
  }
};
</script>

<style lang="scss">
.login {
  margin-top: 30vh;
}

.login-buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
