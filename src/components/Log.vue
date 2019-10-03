<template>
  <RouterLink
    :to="{
      name: 'detail',
      props: { slug: data.id },
      params: { slug: data.id, events: data.occurrences }
    }"
  >
    <span class="text">{{ data.details }}</span>
    <p>{{ data.origin }}</p>
    <p>{{ date }}</p>
  </RouterLink>
</template>

<script>
export default {
  props: {
    data: Object
  },
  computed: {
    date: function() {
      return new Date(this.data.createdAt).toLocaleString("pt-BR");
    }
  }
};
</script>

<style>
.text {
  display: inline-block;
  width: 500px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
