<template>
  <div class="line-chart">
    <Line :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import { generateRandomColor } from '@/utils';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const props = defineProps({
  data: {
    type: Array,
    default: () => []
  }
});

const labels = computed(() => {
  if (props.data.length > 0) {
    return props.data[0].list.map(chart => chart.label);
  }
  return [];
});

const datasets = computed(() => {
  return props.data.map(chart => {
    return {
      label: chart.label,
      backgroundColor: generateRandomColor(),
      data: chart.list.map(item => item.value),
    }
  });
});

const chartData = computed(() => ({
  labels: labels.value,
  datasets: datasets.value
}));

const options = reactive({
  responsive: true,
  maintainAspectRatio: false,
})
</script>

<style>
.line-chart {
  @apply bg-white p-6 rounded-3xl shadow-md shadow-gray-900/5;
}
</style>
