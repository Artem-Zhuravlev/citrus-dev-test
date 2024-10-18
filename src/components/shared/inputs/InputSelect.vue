<template>
  <select class="select" v-model="model">
    <option disabled selected>Select an option</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.label }}
    </option>
  </select>
</template>


<script setup>
import { defineProps, defineEmits, watch, defineModel } from 'vue';

const props = defineProps({
  options: {
    type: Array,
    required: true,
  },
});

const model = defineModel();
const emit = defineEmits(['update:modelValue']);

watch(model, (newValue) => {
  emit('update:modelValue', newValue);
});


</script>

<style>
.select {
  @apply bg-white p-3 rounded-xl shadow-md shadow-gray-900/5 cursor-pointer;
  @apply transition duration-200 ease-in-out;

  &:focus {
    @apply border-cyan-500 outline-none shadow-none;
    @apply ring-cyan-500 ring-2;
  }

  &:hover {
    @apply shadow-lg;
  }

  &:active {
    @apply bg-gray-100;
  }
}
</style>
