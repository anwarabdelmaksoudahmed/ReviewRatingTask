<template>
  <div class="bg-white p-4 rounded shadow mb-4">
    <form @submit.prevent="submitReview">
      <input
        v-model="name"
        type="text"
        :placeholder="$t('yourName')"
        class="border rounded w-full p-2 mb-2"
        required
      />
      <textarea
        v-model="text"
        :placeholder="$t('yourReview')"
        class="border rounded w-full p-2 mb-2"
        required
      ></textarea>
      <div class="flex items-center space-x-2 mb-4">
        <span
          v-for="n in 5"
          :key="n"
          class="cursor-pointer text-gray-400 text-2xl"
          :class="{ 'text-yellow-500': rating >= n }"
          @click="setRating(n)"
        >
          ★
        </span>
      </div>
      <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">
        {{ $t("submitReview") }}
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useReviewStore } from "../../../store/reviewStore";

const name = ref("");
const text = ref("");
const rating = ref<number | null>(null);
const store = useReviewStore();

const setRating = (value: number) => {
  rating.value = value;
};

const submitReview = () => {
  if (rating.value === null) {
    alert("Please select a rating");
    return;
  }

  store.addReview({
    id: Date.now(),
    name: name.value,
    text: text.value,
    rating: rating.value,
    date: new Date().toISOString(),
  });
  name.value = "";
  text.value = "";
  rating.value = null;
};
</script>

<style scoped></style>
