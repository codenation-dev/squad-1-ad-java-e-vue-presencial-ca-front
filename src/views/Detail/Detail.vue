<template>
  <div class="container">
    <div class="card">
      <section>
        <router-link :to="{ name: 'home' }">
          <Button class="back" label="Voltar" isOutlined isPrimary></Button>
        </router-link>
      </section>
      <section class="card-header-title">
        <div class="description">
          <h1 class="title is 2">
            Erro no {{ data.origin.origin }} em {{ date }}
          </h1>
        </div>
      </section>
      <section class="card-content columns level">
        <div class="column is-8 level left">
          <h2 class="title is-4">Título</h2>
          <p class="content">{{ data.message }}</p>
          <h2 class="title is-4">Detalhes</h2>
          <p class="content">{{ data.details }}</p>
        </div>
        <div class="column is-2 level right">
          <Level :level="data.severity"></Level>
          <h2 class="title is-4 content is-marginless">Eventos</h2>
          <p class="content">{{ events }}</p>
          <h2 class="title is-4 is-marginless">Coletado por</h2>
          <p class="content">{{ data.reportedBy.id }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";
import Level from "@/components/Level";
import axios from "axios";

export default {
  components: {
    Button,
    Level
  },
  props: {
    events: String,
    slug: String
  },
  data() {
    return {
      data: {}
    };
  },
  async created() {
    let { data } = await axios.get(
      "https://production-squad-one.herokuapp.com/logs/" + this.slug
    );
    this.data = data;
  },
  computed: {
    date: function() {
      return new Date(this.data.createdAt).toLocaleString("pt-BR");
    }
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
