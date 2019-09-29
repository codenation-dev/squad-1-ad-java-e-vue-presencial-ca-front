<template>
  <div>
    <FilterLog />
    <div class="container">
      <RouterLink
        :to="{
          name: 'detail',
          props: { slug: 'data' },
          params: { slug: 'data' }
        }"
        >Detail Example</RouterLink
      >
    </div>
  </div>
</template>

<script>
import FilterLog from "@/components/FilterLog";

export default {
  components: {
    FilterLog
  }
};
</script>

<style></style>
