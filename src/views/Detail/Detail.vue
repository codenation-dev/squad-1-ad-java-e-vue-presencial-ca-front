<template>
  <div class="container">
    <div class="card">
      <section>
        <Button class="back" label="Voltar" isOutlined isPrimary />
      </section>
      <section class="card-header-title">
        <div class="description">
          <h1 class="title is 2">Erro no {{ origin }} em {{ timestamp }}</h1>
        </div>
      </section>
      <section class="card-content columns level">
        <div class="column is-8 level left">
          <h2 class="title is-4">Título</h2>
          <p class="content">{{ description }}</p>
          <h2 class="title is-4">Detalhes</h2>
          <p class="content">{{ details }}</p>
        </div>
        <div class="column is-2 level right">
          <p class="tag is-medium is-danger has-text-centered">
            {{ level }}
          </p>
          <h2 class="title is-4 content is-marginless">Eventos</h2>
          <p class="content">{{ occurrences }}</p>
          <h2 class="title is-4 is-marginless">Coletado por</h2>
          <p class="content">{{ token }}</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button";

export default {
  components: {
    Button
  },
  props() {
    String;
  },
  data() {
    return {
      origin: "Lorem Ipsum passage",
      timestamp: new Date(),
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet",
      details:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      level: "error",
      occurrences: 455,
      token: "485449898298"
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme.scss";

.button {
  margin-top: 2vh;
  margin-left: 4vh;
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
