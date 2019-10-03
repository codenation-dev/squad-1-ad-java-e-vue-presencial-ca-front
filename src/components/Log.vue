<template>
  <RouterLink
    :to="{
      name: 'detail',
      props: { slug: 'data' },
      params: { slug: 'data' }
    }"
  >
    <span class="text">{{ data.description }}</span>
    <p>{{ data.origin }}</p>
    <p>{{ data.timestamp }}</p>
  </RouterLink>
</template>

<script>
export default {
  props: {
    data: Object
  }
};
</script>

<style>
.text {
  display: inline-block;
  width: 200px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
