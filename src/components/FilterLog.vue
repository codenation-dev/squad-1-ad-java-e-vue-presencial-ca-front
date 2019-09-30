<template>
  <form @submit.prevent="submit(form)">
    <div class="filter-section">
      <div class="container level">
        <div class="level-left">
          <Select :options="environmentOptions" v-model="form.options" />
          <Select :options="orderOptions" v-model="form.order" />
        </div>

        <div class="level-right">
          <Select :options="searchOptions" v-model="form.search" />
          <b-field>
            <b-input
              :disabled="!form.search"
              :input="form.input"
              icon="search"
              placeholder="Search..."
              type="search"
            ></b-input>
          </b-field>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import Select from "@/components/Select";

export default {
  components: {
    Select
  },
  data: function() {
    return {
      form: {
        input: "",
        options: "",
        order: "",
        search: ""
      },
      environmentOptions: [
        { label: "Produção", value: "DEV" },
        { label: "Desenvolvimento", value: "PROD" },
        { label: "Homologação", value: "HOMOLOG" }
      ],
      orderOptions: [
        { label: "Ordenar por", value: null },
        { label: "Level", value: "level" },
        { label: "Frequência", value: "frequency" }
      ],
      searchOptions: [
        { label: "Buscar por", value: null },
        { label: "Level", value: "level" },
        { label: "Descrição", value: "description" },
        { label: "Origem", value: "origin" }
      ]
    };
  },
  methods: {
    submit() {}
  }
};
</script>

<style lang="scss" scoped>
@import "../theme.scss";

.level {
  padding: 10px;
}

.filter-section {
  background-color: $primary-invert;
  box-shadow: 0 0 5px rgba($black, 0.25), 0 0 0 1px rgba($black, 0.1);
}

.filter-log {
  display: flex;
  height: 60px;
  justify-content: space-between;
  padding: 10px;
}

.level-left,
.level-right {
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
  }
}

.level-right {
  @media (min-width: 480px) {
    div:last-child {
      margin-left: 5px;
    }
  }

  @media (max-width: 768px) {
    div:last-child {
      width: 100%;
    }
  }
}

.level-left {
  @media (min-width: 481px) {
    div:first-child {
      margin-right: 10px;
    }
  }
}
</style>
