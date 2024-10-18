<template>
  <div class="cart-wrapper">
    <Bar :data="chartData" :options="options" />
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue';
import options from './chartOptions';
import {
	Chart as ChartJS,
	Title,
	Tooltip,
	Legend,
	BarElement,
	CategoryScale,
	LinearScale,
} from 'chart.js';
import { Bar } from 'vue-chartjs';

ChartJS.register(
	CategoryScale,
	LinearScale,
	BarElement,
	Title,
	Tooltip,
	Legend,
);

const props = defineProps({
	data: {
		type: Array,
		default: () => [],
	},
});

const labels = computed(() => {
	if (props.data.length > 0) {
		return props.data.map((chart) => chart.label);
	}
	return [];
});

const data = computed(() => {
	if (props.data.length > 0) {
		return props.data.map((chart) => chart.value);
	}
	return [];
});

const chartData = computed(() => ({
	labels: labels.value,
	datasets: [
		{
			backgroundColor: '#06b6d4',
			data: data.value,
		},
	],
}));
</script>

