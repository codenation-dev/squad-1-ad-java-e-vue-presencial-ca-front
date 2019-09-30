<template>
  <div class="container">
    <div class="card">
      <section>
        <Button class="back" label="Voltar" isOutlined isPrimary />
      </section>
      <section class="card-header-title">
        <div class="description">
          <h1 class="title is 2">
            Erro no {{ data.origin }} em {{ data.timestamp }}
          </h1>
        </div>
      </section>
      <section class="card-content columns level">
        <div class="column is-8 level left">
          <h2 class="title is-4">Título</h2>
          <p class="content">{{ data.description }}</p>
          <h2 class="title is-4">Detalhes</h2>
          <p class="content">{{ data.details }}</p>
        </div>
        <div class="column is-2 level right">
          <p :class="isLevel" class="tag is-medium has-text-centered">
            {{ data.level }}
          </p>
          <h2 class="title is-4 content is-marginless">Eventos</h2>
          <p class="content">{{ data.occurrences }}</p>
          <h2 class="title is-4 is-marginless">Coletado por</h2>
          <p class="content">{{ data.token }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import axios from "axios";

export default {
  components: {
    Button
  },
  props: {
    slug: String
  },
  computed: {
    isLevel() {
      switch (this.data.level) {
        case "error":
          return "is-danger";
        case "warning":
          return "is-warning";
        case "info":
          return "is-info";
        default:
          return "";
      }
    }
  },
  data() {
    return {
      data: {}
    };
  },
  async created() {
    let { data } = await axios.get(
      "https://my-json-server.typicode.com/Icaruspooky/test-db/" + this.slug
    );
    this.data = data;
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme.scss";

.button {
  margin-top: 2vh;
  margin-left: 4vw;
}

.title {
  margin-bottom: 0;
  margin: 0;
}

.content {
  margin: 2px;
}

.columns {
  margin: 2px;
  padding: 2px;
}

.column {
  margin: 2px;
  padding: 2px;
}

.description {
  padding-bottom: 2px;
  margin-bottom: 0;
}

.tag {
  margin-bottom: 10px;
}

.back {
  padding-top: 2vh;
  padding-left: 2vh;
}
</style>
