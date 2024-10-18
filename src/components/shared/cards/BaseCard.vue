<template>
  <article class="card">
    <h3 class="card-title">{{ title }}</h3>
    <p class="card-description">{{ description }}</p>
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
  @apply bg-white p-6 rounded-3xl shadow-md shadow-gray-900/5 text-center;
}
.card-title {
  @apply mt-4 mb-4 text-xl font-semibold leading-6;
}
.card-description {
  @apply text-3xl text-cyan-500;
}
</style>
