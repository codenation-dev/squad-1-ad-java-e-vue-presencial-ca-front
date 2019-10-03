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
        case "ERROR":
          return "is-danger";
        case "WARNING":
          return "is-warning";
        case "INFO":
          return "is-success";
        case "DEBUG":
          return "is-info";
        default:
          return "";
      }
    }
  }
};
</script>

<style></style>
