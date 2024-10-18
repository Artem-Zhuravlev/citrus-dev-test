<template>
  <div class="section grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <base-card
      v-for="(item, index) in kpiCards"
      :key="index"
      :title="item.title"
      :description="item.value.toString()"
    />
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import { BaseCard } from '@/components/shared';
import { useSalesStore } from '@/stores/sales';
import { useI18n } from 'vue-i18n';

const salesStore = useSalesStore();
const { t } = useI18n();

const { totalSales, numberOfOrders, topPerformingProduct } = salesStore;

const kpiCards = reactive([
	{ title: t('kpi.total_sales'), value: totalSales },
	{ title: t('kpi.number_of_orders'), value: numberOfOrders },
	{ title: t('kpi.top_performing_product'), value: topPerformingProduct },
	{ title: t('kpi.sales_growth_percentage'), value: 15 },
]);
</script>
