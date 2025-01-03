<template>
  <div class="grid gap-4">
    <div
      v-for="review in reviews"
      :key="review.id"
      class="bg-white p-4 rounded shadow"
    >
      <p class="font-bold">{{ review.name }}</p>
      <div class="flex items-center mb-2">
        <span
          v-for="n in 5"
          :key="n"
          class="text-gray-400 text-xl"
          :class="{ 'text-yellow-500': review.rating >= n }"
        >
          ★
        </span>
      </div>
      <p class="text-sm text-gray-600">
        {{ new Date(review.date).toLocaleDateString() }}
      </p>
      <p>{{ review.text }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  reviews: Array,
});
</script>
