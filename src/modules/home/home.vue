<template>
  <div class="min-h-screen bg-gray-50 p-4">
    <h1 class="text-2xl font-bold text-center mb-4">{{ $t("appTitle") }}</h1>
    <ReviewForm />
    <FilterAndSort @updateFilterSort="updateFilterSort" />
    <ReviewList :reviews="filteredAndSortedReviews" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import ReviewForm from "./components/ReviewForm.vue";
import ReviewList from "./components/ReviewList.vue";
import FilterAndSort from "./components/FilterAndSort.vue";
import { useReviewStore } from "../../store/reviewStore";

const store = useReviewStore();

const filterOption = ref<string>("all");
const sortOption = ref<string>("newest");

const updateFilterSort = ({
  filter,
  sort,
}: {
  filter: string;
  sort: string;
}) => {
  filterOption.value = filter;
  sortOption.value = sort;
};

const filteredAndSortedReviews = computed(() => {
  let reviews = [...store.reviews];

  if (filterOption.value !== "all") {
    reviews = reviews.filter(
      (review) => review.rating === Number(filterOption.value)
    );
  }

  if (sortOption.value === "newest") {
    reviews.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  } else if (sortOption.value === "oldest") {
    reviews.sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );
  } else if (sortOption.value === "highest") {
    reviews.sort((a, b) => b.rating - a.rating);
  } else if (sortOption.value === "lowest") {
    reviews.sort((a, b) => a.rating - b.rating);
  }

  return reviews;
});
</script>
