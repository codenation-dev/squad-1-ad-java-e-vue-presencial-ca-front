<template>
  <div>
    <FilterLog @reloadData="reloadData()" :queryParams="queryParams" />
    <div class="container">
      <Logs :data="data" />
    </div>
  </div>
</template>

<script>
import FilterLog from "@/components/FilterLog";
import Logs from "@/components/Logs";

import axios from "axios";

export default {
  data() {
    return {
      queryParams: { options: "" },
      data: []
    };
  },
  components: {
    Logs,
    FilterLog
  },
  methods: {
    async reloadData() {
      let sumarized =
        "https://production-squad-one.herokuapp.com/logs/sumarized";
      let { data } = await axios.get(
        sumarized + "?environment=" + this.queryParams.options
      );
      this.data = data.content;
    }
  },
  async created() {
    await this.reloadData();
  }
};
</script>

<style></style>
