<template>
  <div class="columns">
    <div class="column is-4 is-offset-4">
      <div class="card">
        <div class="card-content login">
          <Input label="Nome" type="text" placeholder="Nome" />
          <Input label="Sobrenome" type="text" placeholder="Sobrenome" />
          <Input label="Email" type="text" placeholder="Email" />
          <Input label="Senha" type="text" placeholder="Senha" />
          <Input
            label="Confirme sua senha"
            type="text"
            placeholder="Confirme sua senha"
          />

          <div class="login-buttons">
            <Button class="has-text-centered" label="Enviar" isPrimary />
            <router-link :to="{ name: 'login' }">
              <Button class="back" label="Voltar" isOutlined isPrimary />
            </router-link>
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
  margin-top: 10vh;
}

.login-buttons {
  display: flex;
  justify-content: space-evenly;
}
</style>
