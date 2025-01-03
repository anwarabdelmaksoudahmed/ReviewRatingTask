<template>
  <div class="flex justify-center mt-4">
    <button
      v-for="n in totalPages"
      :key="n"
      @click="$emit('changePage', n)"
      class="px-3 py-1 mx-1 border rounded"
      :class="{ 'bg-blue-500 text-white': n === currentPage }"
    >
      {{ n }}
    </button>
  </div>
</template>

<script setup>
import { computed, defineProps } from "vue";

const props = defineProps({
  total: { type: Number, required: true },
  perPage: { type: Number, required: true },
  currentPage: { type: Number, required: true },
});

const totalPages = computed(() => Math.ceil(props.total / props.perPage));
</script>
