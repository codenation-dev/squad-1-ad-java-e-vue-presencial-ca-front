<template>
  <div>
    <FilterLog @reloadData="reloadData()" :queryParams="queryParams" />
    <div class="container">
      <Logs :data="data" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

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
  computed: {
    ...mapGetters("home", ["getUserInfo"])
  },
  methods: {
    ...mapActions("home", ["getUser"]),
    async getInfo() {
      if (!this.getUserInfo()) {
        await this.getUser();
      }
    },
    async reloadData() {
      console.log("Reloaded");
      let sumarized =
        "https://production-squad-one.herokuapp.com/logs/sumarized";
      console.log(this.queryParams.options);
      let { data } = await axios.get(
        sumarized + "?environment=" + this.queryParams.options
      );
      this.data = data.content;
    }
  },
  async created() {
    await this.getInfo();
    await this.reloadData();
  }
};
</script>

<style></style>
