<template>
  <div>
    <FilterLog @reloadData="reloadData()" :queryParams="queryParams" />
    <div class="container">
      <div v-if="noResults" class="no-results">
        <img
          class="no-results-img"
          src="@/assets/img/no-results.png"
          alt="no results"
        />
      </div>

      <Logs v-else :data="data" />
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
      data: [],
      noResults: false
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

      this.noResults = data.totalElements == 0 ? true : false;
    }
  },
  async created() {
    await this.reloadData();
  }
};
</script>

<style lang="scss" scoped>
.no-results {
  margin: auto;
  padding-top: 10vw;
  width: 50vw;
}

.no-results-img {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: auto;
  max-width: 40vw;
}
</style>
