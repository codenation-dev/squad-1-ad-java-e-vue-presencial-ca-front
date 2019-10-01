<template>
  <transition name="fade">
    <div v-if="getError" class="notification is-danger">{{ getError }}</div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("auth", ["getError"])
  }
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
