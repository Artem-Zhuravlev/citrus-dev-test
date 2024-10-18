<template>
  <div class="container">
    <KpiSection :items="kpiCards" />
    <div class="section">
      <InputSelect :options="selectOptions" v-model="selectedOption"/>
      <InputSelect :options="countries" v-model="selectedOption"/>
    </div>
		{{ totalSales }} {{  numberOfOrders }}
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <LineChart :data="lineChartData"/>
      <BarChart :data="lineChartData"/>
    </div>
		<div class="section">
			<TableBase :headers="headers" :items="items"/>
		</div>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue';
import { KpiSection } from '@/components/features';
import { LineChart, BarChart, TableBase } from '@/components/shared';
import { InputSelect } from '@/components/shared';
import { salesMockData } from '@/mocks';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const salesData = reactive(salesMockData);

const countries = computed(() => {
	const uniqueRegions = new Set(salesData.map((item) => item.region));

	return Array.from(uniqueRegions).map((region) => {
		return {
			value: region,
			label: t(`regions.${region}`),
		};
	});
});

const totalSales = computed(() => {
	return salesData.reduce((acc, item) => acc + item.quantity_sold, 0);
});

const kpiCards = reactive([
	{ title: 'Total sales', value: 42 },
	{ title: 'Number of orders', value: 20 },
	{ title: 'Top-performing product', value: 10 },
	{ title: 'Sales growth percentage', value: 15 },
]);
const selectOptions = [
	{ value: 'lastWeek', label: 'Last week' },
	{ value: 'lastMonth', label: 'Last month' },
];
const selectedOption = ref();

const lineChartData = reactive([
	{
		label: 'Some label',
		list: [
			{
				value: 10,
				label: 'January',
			},
			{
				value: 16,
				label: 'February',
			},
			{
				value: 20,
				label: 'March',
			},
			{
				value: 25,
				label: 'April',
			},
			{
				value: 35,
				label: 'May',
			},
		],
	},
]);

const headers = [
	{ text: 'Name', value: 'name' },
	{ text: 'Height (cm)', value: 'height', sortable: true },
	{ text: 'Weight (kg)', value: 'weight', sortable: true },
	{ text: 'Age', value: 'age', sortable: true },
];

const items = [
	{ name: 'Curry', height: 178, weight: 77, age: 20 },
	{ name: 'James', height: 180, weight: 75, age: 21 },
	{ name: 'Jordan', height: 181, weight: 73, age: 22 },
];
</script>
