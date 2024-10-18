<template>
  <div class="cart-wrapper">
    <EasyDataTable class="table-base" :headers="headers" :items="items" />
  </div>
</template>

<script setup>
import EasyDataTable from 'vue3-easy-data-table';
import 'vue3-easy-data-table/dist/style.css';

const props = defineProps({
	headers: {
		type: Array,
		required: true,
	},
	items: {
		type: Array,
		default: () => [],
	},
});
</script>

<style>
.table-base {
  --easy-table-border: 1px solid #e5e5e5;
  --easy-table-row-border: 1px solid #e5e5e5;

  --easy-table-header-font-size: 16px;
  --easy-table-header-height: 60px;
  --easy-table-header-font-color: #000;
  --easy-table-header-background-color: transparent;

  --easy-table-header-item-padding: 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: transparent;

  --easy-table-body-row-font-color: #000;
  --easy-table-body-row-background-color: transparent;
  --easy-table-body-row-height: 60px;
  --easy-table-body-row-font-size: 18px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #f3fdfe;

  --easy-table-body-item-padding: 15px;

  --easy-table-footer-background-color: transparent;
  --easy-table-footer-font-color: #000;
  --easy-table-footer-font-size: 16px;
  --easy-table-footer-padding: 15px;
  --easy-table-footer-height: 60px;

  --easy-table-rows-per-page-selector-width: 70px;
  --easy-table-rows-per-page-selector-option-padding: 10px;
  --easy-table-rows-per-page-selector-z-index: 1;


  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>
