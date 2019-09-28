<template>
  <div class="select">
    <select class="select-native" @change="change">
      <option
        v-for="option in options"
        :key="option.label"
        :value="option.value"
        >{{ option.label }}</option
      >
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
    value: String
  },
  model: {
    prop: "value",
    event: "change"
  },
  methods: {
    change($event) {
      this.$emit("change", $event.target.value);
    }
  }
};
</script>

<style lang="scss" scoped>
.select {
  @media (max-width: 480px) {
    margin: 5px 0;
  }
}

.select,
.select-native {
  @media (max-width: 480px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
