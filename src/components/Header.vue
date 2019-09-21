<template>
  <header class="header">
    <div class="header-info">
      <h1 class="title">Bem vindo $user</h1>
      <h3 class="subtitle">Seu token é {qwertyuiopasdfghjklzxcvbnm}</h3>
    </div>
    <div class="profile">
      <img
        class="profile-img"
        alt="profile"
        src="https://img.pngio.com/profilepng-512512-profile-png-512_512.png"
      />
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
.header {
  background-color: $primary;
  color: $white;
  display: flex;
  height: 95px;
  justify-content: space-between;
}
.header-info {
  padding: 20px 40px;
}
.profile {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 40px;
}
.profile-img {
  height: 65px;
  width: 65px;
}
.subtitle {
  font-size: 1.2em;
  line-height: 1.2;
}
.title {
  font-size: 2em;
}

@media (max-width: $small) {
  .header-info {
    padding: 10px 20px 0;
  }
}
</style>
