<template>
  <div class="bg-white p-4 rounded shadow mb-4 flex flex-wrap gap-4">
    <div>
      <label for="sort" class="block text-sm font-medium text-gray-700"
        >Sort By:</label
      >
      <select
        v-model="localSortOption"
        id="sort"
        class="border rounded w-full p-2"
        @change="emitFilterSort"
      >
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
        v-model="localFilterOption"
        id="filter"
        class="border rounded w-full p-2"
        @change="emitFilterSort"
      >
        <option value="all">All Ratings</option>
        <option v-for="n in 5" :key="n" :value="n">{{ n }} Star(s)</option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  filterOption: String,
  sortOption: String,
});

const emit = defineEmits(["updateFilterSort"]);

const localFilterOption = ref(props.filterOption || "all");
const localSortOption = ref(props.sortOption || "newest");

const emitFilterSort = () => {
  emit("updateFilterSort", {
    filter: localFilterOption.value,
    sort: localSortOption.value,
  });
};
</script>
