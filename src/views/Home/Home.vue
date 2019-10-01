<template>
  <div>
    <FilterLog />
    <div class="container">
      <Logs />
    </div>
  </div>
</template>

<script>
import FilterLog from "@/components/FilterLog";
import Logs from "@/components/Logs";

export default {
  components: {
    Logs,
    FilterLog
  }
};
</script>

<style></style>
