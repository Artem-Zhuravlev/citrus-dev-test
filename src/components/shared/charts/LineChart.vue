<template>
  <div class="cart-wrapper">
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
} from 'chart.js';
import { Line } from 'vue-chartjs';

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
		return props.data.map((chart) => {
			return chart.value;
		});
	}
	return [];
});

const chartData = computed(() => ({
	labels: labels.value,
	datasets: [
		{
			borderColor: '#06b6d4',
			data: data.value,
		},
	],
}));
</script>
