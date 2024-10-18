<template>
  <div class="chart-wrapper">
    <Line :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import options from './chartOptions';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
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
      borderColor: '#06b6d4',
      data: chart.list.map(item => item.value),
    }
  });
});

const chartData = computed(() => ({
  labels: labels.value,
  datasets: datasets.value
}));
</script>
