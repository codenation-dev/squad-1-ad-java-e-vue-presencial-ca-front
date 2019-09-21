<template>
  <main>
    <Header />
    <div class="container">
      <router-view />
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  components: {
    Header
  }
};
</script>

<style lang="scss">
.container {
  flex-grow: 1;
  margin: 0 auto;
  position: relative;
  width: auto;
}

@media (min-width: $small) {
  .container {
  }
}

@media (min-width: $medium) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: $large) {
  .container {
    max-width: 1152px;
  }
}

@media (min-width: $extra-large) {
  .container {
    max-width: 1344px;
  }
}
</style>
