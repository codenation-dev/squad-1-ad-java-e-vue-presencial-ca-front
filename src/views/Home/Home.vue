<template>
  <div>
    <FilterLog />
    <div class="container">
      <Logs />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import FilterLog from "@/components/FilterLog";
import Logs from "@/components/Logs";

import axios from "axios";

export default {
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
    }
  },
  async created() {
    await this.getInfo();

    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/logs"
    );
    this.data = data;
  }
};
</script>

<style></style>
