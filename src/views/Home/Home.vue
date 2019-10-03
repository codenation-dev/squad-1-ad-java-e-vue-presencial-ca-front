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

import axios from "axios";

export default {
  components: {
    Logs,
    FilterLog
  },
  async created() {
    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/logs"
    );
    this.data = data;
  }
};
</script>

<style></style>
