<template>
  <section>
    <b-field grouped group-multiline>
      <button
        class="button field is-danger"
        @click="checkedRows = []"
        :disabled="!checkedRows.length"
      >
        <b-icon icon="close"></b-icon>
        <span>Clear checked</span>
      </button>
      <RouterLink
        :to="{
          name: 'detail',
          props: { slug: 'data' },
          params: { slug: 'data' }
        }"
        >Detail Example</RouterLink
      >
    </b-field>

    <b-tabs>
      <b-tab-item label="Table">
        <b-table
          :data="data"
          :checked-rows.sync="checkedRows"
          :is-row-checkable="row => row.id !== 3"
          checkable
        >
          <template slot-scope="props">
            <b-table-column field="level" label="Level" width="40" centered>
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
      </b-tab-item>

      <b-tab-item label="Checked rows">
        <pre>{{ checkedRows }}</pre>
      </b-tab-item>
    </b-tabs>
  </section>
</template>

<script>
import Level from "@/components/Level";
import Log from "@/components/Log";

export default {
  components: {
    Level,
    Log
  },
  data() {
    const data = [
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
  }
};
</script>
