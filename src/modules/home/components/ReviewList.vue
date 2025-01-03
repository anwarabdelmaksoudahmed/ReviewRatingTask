<template>
  <div v-if="filteredReviews.length > 0" class="grid gap-4">
    <div
      v-for="review in paginatedReviews"
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
    <Pagination
      :total="filteredReviews.length"
      :per-page="5"
      :currentPage="currentPage"
      @changePage="changePage"
    />
  </div>
  <div v-else class="text-center text-gray-600">No reviews available</div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";
import { useReviewStore } from "../../../store/reviewStore";
import Pagination from "./Pagination.vue";

const store = useReviewStore();
const currentPage = ref(1);

const filteredReviews = computed(() => {
  return store.filteredReviews || [];
});

const paginatedReviews = computed(() => {
  const start = (currentPage.value - 1) * 5;
  const end = start + 5;
  return filteredReviews.value.slice(start, end);
});

const changePage = (page: number) => {
  currentPage.value = page;
};
</script>
