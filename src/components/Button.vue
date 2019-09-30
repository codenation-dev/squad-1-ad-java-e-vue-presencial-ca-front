<template>
  <div class="control">
    <button
      class="button"
      :class="{ 'is-primary': isPrimary, 'is-outlined': isOutlined }"
      :disabled="isDisabled"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    isPrimary: Boolean,
    isOutlined: Boolean,
    isDisabled: Boolean
  }
};
</script>

<style></style>
