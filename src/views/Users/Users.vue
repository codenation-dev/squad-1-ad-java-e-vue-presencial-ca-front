<template>
  <section class="user-list">
    <b-table :data="data">
      <template slot-scope="props">
        <b-table-column field="id" label="ID" centered>
          {{ props.row.id }}
        </b-table-column>
        <b-table-column field="nome" label="Nome" centered>
          {{ props.row.firstName + " " + props.row.lastName }}
        </b-table-column>
        <b-table-column field="email" label="Email" centered>
          {{ props.row.email }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import axios from "axios";

export default {
  components: {},
  data() {
    let data = [];

    return {
      data
    };
  },
  async created() {
    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/user"
    );
    if (data[0]) {
      this.data = data;
    }
  }
};
</script>

<style scoped>
.user-list {
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  justify-content: space-evenly;
}

.button {
  margin-bottom: 10px;
}
</style>
