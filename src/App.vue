<template>
  <div class="container">
    <KpiSection />
    <div class="section">
      <InputSelect :options="selectOptions" v-model="selectedOption"/>
      <InputSelect :options="salesStore.countries" v-model="selectedOption"/>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <LineChart :data="chartData"/>
      <BarChart :data="chartData"/>
    </div>
		<div class="section">
			<TableBase :headers="headers" :items="tableData"/>
		</div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { KpiSection } from '@/components/features';
import { LineChart, BarChart, TableBase } from '@/components/shared';
import { InputSelect } from '@/components/shared';
import { useSalesStore } from '@/stores/sales';
import { useI18n } from 'vue-i18n';

const salesStore = useSalesStore();
const { chartData, tableData } = salesStore;

const selectOptions = [
	{ value: 'lastWeek', label: 'Last week' },
	{ value: 'lastMonth', label: 'Last month' },
];
const selectedOption = ref();

const headers = [
	{ text: 'Order ID', value: 'id' },
	{ text: 'Product name', value: 'product_name', sortable: true },
	{ text: 'Total Price', value: 'total_price', sortable: true },
	{ text: 'Region', value: 'region', sortable: true },
];
</script>
