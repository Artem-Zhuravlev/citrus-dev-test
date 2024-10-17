<template>
  <div class="container">
    <KpiSection :items="kpiCards" />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { KpiSection } from '@components/features';

const kpiCards = reactive([
  { title: 'Total sales', value: 42 },
  { title: 'Number of orders', value: 20 },
  { title: 'Top-performing product', value: 10 },
  { title: 'Sales growth percentage', value: 15 },
]);
</script>
