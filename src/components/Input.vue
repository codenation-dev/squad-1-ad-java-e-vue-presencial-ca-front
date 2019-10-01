<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        :type="type"
        :placeholder="placeholder"
        @change="change"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    type: String,
    placeholder: String
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

<style></style>
