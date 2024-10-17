<template>
  <article class="card">
    <h3 class="card-title">{{ title }}</h3>
    <p>{{ description }}</p>
  </article>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String
})
</script>

<style>
.card {
  @apply bg-white border border-gray-200 rounded-lg shadow-md p-6;
}
.card-title {
  @apply text-lg font-bold mb-4;
}
.card-button {
  @apply bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4;
}
</style>
