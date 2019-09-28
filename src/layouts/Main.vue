<template>
  <main>
    <Header />
    <router-view />
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
