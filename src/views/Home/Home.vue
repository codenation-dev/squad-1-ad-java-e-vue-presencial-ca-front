<template>
  <div>
    <FilterLog />
    <div class="container">
      <h1>This is an home page</h1>
      <router-link :to="{ name: 'detail', params: { slug: 'data' } }">
        <button>detalhe</button>
      </router-link>
    </div>
  </div>
</template>

<script>
import FilterLog from "@/components/FilterLog";

import axios from "axios";

export default {
  components: {
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
