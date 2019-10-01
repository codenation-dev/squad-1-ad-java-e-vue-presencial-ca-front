<template>
  <transition name="fade" mode="out-in">
    <RouterView />
  </transition>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "./theme.scss";

html,
body {
  width: 100%;
  height: 100%;
  background: rgb(220, 220, 220);
  background: radial-gradient(
    circle,
    rgba(220, 220, 220, 0.5) 0%,
    rgba(162, 162, 162, 0.5) 100%
  );
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>
