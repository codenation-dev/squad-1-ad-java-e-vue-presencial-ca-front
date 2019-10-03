<template>
  <div>
    <FilterLog :queryParams="queryParams" />
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
      queryParams: {},
      data: []
    };
  },
  components: {
    Logs,
    FilterLog
  },
  async created() {
    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/logs/sumarized/",
      { params: this.queryParams.environmentOptions }
    );
    if (data.content[0]) {
      this.data = data.content;
    }
  }
};
</script>

<style></style>
