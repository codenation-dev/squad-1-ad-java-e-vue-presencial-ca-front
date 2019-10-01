<template>
  <section class="log-list">
    <b-field grouped group-multiline>
      <button
        class="button field is-danger"
        @click="checkedRows = []"
        :disabled="!checkedRows.length"
      >
        <span>Limpar selecionados</span>
      </button>
      <Button label="Arquivar" isOutlined isPrimary></Button>
      <Button label="Apagar" isOutlined isPrimary></Button>
    </b-field>

    <b-table
      :data="data"
      :checked-rows.sync="checkedRows"
      :is-row-checkable="row => row.id !== 3"
      checkable
    >
      <template slot-scope="props">
        <b-table-column field="level" label="Level" centered>
          <Level :level="props.row.level"></Level>
        </b-table-column>

        <b-table-column field="log" label="Log" centered>
          <Log :data="props.row.log"></Log>
        </b-table-column>

        <b-table-column field="eventos" label="Eventos" centered>
          {{ props.row.eventos }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import Button from "@/components/Button";
import Level from "@/components/Level";
import Log from "@/components/Log";
import axios from "axios";

export default {
  components: {
    Button,
    Level,
    Log
  },
  data() {
    let data = [
      {
        level: "error",
        log: {
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          origin: "Lorem.ipsum.passage",
          timestamp: "35/05/2019 09:53:10"
        },
        eventos: 455
      },
      {
        level: "warning",
        log: {
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          origin: "Lorem.ipsum.passage",
          timestamp: "35/05/2019 09:53:10"
        },
        eventos: 1000
      },
      {
        level: "debug",
        log: {
          description:
            "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
          origin: "Lorem.ipsum.passage",
          timestamp: "35/05/2019 09:53:10"
        },
        eventos: 250
      }
    ];

    return {
      data,
      checkedRows: []
    };
  },
  async created() {
    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/logs"
    );
    if (data.content[0]) {
      this.data = data.content;
    }
  }
};
</script>

<style scoped>
.log-list {
  margin-top: 2vh;
}
</style>
