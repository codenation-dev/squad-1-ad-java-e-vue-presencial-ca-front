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
