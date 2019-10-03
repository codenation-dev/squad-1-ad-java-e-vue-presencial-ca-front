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
        <b-table-column field="level" label="Level" width="40" centered>
          <Level :level="props.row.severity"></Level>
        </b-table-column>

        <b-table-column field="log" label="Log" centered>
          <Log :data="props.row"></Log>
        </b-table-column>

        <b-table-column field="eventos" label="Eventos" width="40" centered>
          {{ props.row.occurrences }}
        </b-table-column>
      </template>
    </b-table>
  </section>
</template>

<script>
import Button from "@/components/Button";
import Level from "@/components/Level";
import Log from "@/components/Log";

export default {
  components: {
    Button,
    Level,
    Log
  },
  props: {
    data: Array
  },
  data() {
    return {
      checkedRows: []
    };
  }
};
</script>

<style scoped>
.log-list {
  margin-top: 2vh;
}
</style>
