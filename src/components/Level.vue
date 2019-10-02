<template>
  <div>
    <p :class="isLevel" class="tag is-medium has-text-centered">{{ level }}</p>
  </div>
</template>

<script>
export default {
  props: {
    level: String
  },
  computed: {
    isLevel() {
      switch (this.level) {
        case "error":
          return "is-danger";
        case "warning":
          return "is-warning";
        case "debug":
          return "is-info";
        default:
          return "";
      }
    }
  }
};
</script>

<style></style>
