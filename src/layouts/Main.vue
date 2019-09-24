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
