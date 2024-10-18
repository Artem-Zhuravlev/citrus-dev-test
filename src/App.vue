<template>
  <div class="container">
    <KpiSection :items="kpiCards" />
    <div style="max-height: 300px;"><LineChart :data="lineChartData"/></div>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { KpiSection } from '@/components/features';
import { LineChart } from '@/components/shared';

const kpiCards = reactive([
  { title: 'Total sales', value: 42 },
  { title: 'Number of orders', value: 20 },
  { title: 'Top-performing product', value: 10 },
  { title: 'Sales growth percentage', value: 15 },
]);

const lineChartData = reactive([
  {
    label: 'Some label',
    list: [
      {
        value: 10,
        label: 'January'
      },
      {
        value: 16,
        label: 'February'
      },
      {
        value: 20,
        label: 'March'
      },
      {
        value: 25,
        label: 'April'
      },
      {
        value: 35,
        label: 'May'
      }
    ]
  }
]);
</script>
