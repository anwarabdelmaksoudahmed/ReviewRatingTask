<template>
  <div class="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-4">
    <div>
      <label for="sort" class="block text-sm font-medium text-gray-700"
        >Sort By:</label
      >
      <select v-model="sortOption" id="sort" class="border rounded w-full p-2">
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="highest">Highest Rating</option>
        <option value="lowest">Lowest Rating</option>
      </select>
    </div>
    <div>
      <label for="filter" class="block text-sm font-medium text-gray-700"
        >Filter By:</label
      >
      <select
        v-model="filterOption"
        id="filter"
        class="border rounded w-full p-2"
      >
        <option value="all">All Ratings</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} Star(s)</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useReviewStore } from "../../../store/reviewStore";

const store = useReviewStore();
const sortOption = ref("newest");
const filterOption = ref("all");

// Watch for changes in filterOption and sortOption to update reviews
watch([filterOption, sortOption], () => {
  store.updateFilteredReviews(filterOption.value, sortOption.value);
});
</script>
