<template>
  <div class="login">
    <h1>Login</h1>
    <input type="text" placeholder="e-mail" aria-placeholder="e-mail" />
    <input type="text" placeholder="password" aria-placeholder="password" />
    <button>Login</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.login {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  min-height: 100vh;
}
</style>
