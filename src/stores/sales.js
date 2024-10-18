import { defineStore } from 'pinia';
import { salesMockData } from '@/mocks';
import { getMonthLabel } from '@/utils';
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
    },
    chartData: (state) => {
      const { t } = useI18n();
      const monthSalesMap = new Map();
      state.data.forEach(item => {
        const monthNumber = new Date(item.published_at).getMonth() + 1;
        const totalPrice = item.price * item.quantity_sold;

        if (monthSalesMap.has(monthNumber)) {
          monthSalesMap.set(monthNumber, monthSalesMap.get(monthNumber) + totalPrice);
        } else {
          monthSalesMap.set(monthNumber, totalPrice);
        }
      });

      return Array.from(monthSalesMap, ([monthNumber, value]) => {
        return {
          value,
          label: t(`month.${getMonthLabel(monthNumber)}`),
        };
      });
    },
    tableData: (state) => {
      const { t } = useI18n();
      return state.data.map(
        ({ id, product_name, price, quantity_sold, region }) => {
          return {
            id,
            product_name,
            total_price: price * quantity_sold,
            region: t(`regions.${region}`),
          };
        },
      )
    }
  }
});
