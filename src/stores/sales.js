import { defineStore } from 'pinia';
import { salesMockData } from '@/mocks/salesMockData';
import { useI18n } from 'vue-i18n';

export const useSalesStore = defineStore('sales', {
  state: () => ({
    data: salesMockData,
  }),
  getters: {
    countries: (state) => {
      const { t } = useI18n();
      const uniqueRegions = new Set(state.data.map((item) => item.region));

      return Array.from(uniqueRegions).map((region) => {
        return {
          value: region,
          label: t(`regions.${region}`),
        };
      });
    },
    totalSales: (state) => {
      return state.data.reduce((acc, item) => acc + item.quantity_sold, 0);
    },
    numberOfOrders: (state) => {
      return state.data.length;
    },
    topPerformingProduct: (state) => {
      if (state.data.length === 0) return null;

      return state.data.reduce((maxItem, currentItem) => {
        return maxItem.quantity_sold > currentItem.quantity_sold
         ? maxItem
          : currentItem;
      }, state.data[0]).product_name;
    }
  }
});
