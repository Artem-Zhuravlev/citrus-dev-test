<template>
  <div class="section grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    <base-card
      v-for="(item, index) in items"
      :key="index"
      :title="item.title"
      :description="item.value.toString()"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { BaseCard } from '@/components/shared';

const props = defineProps({
  items: {
    type: Array,
    default: () => []
  }
});
</script>
