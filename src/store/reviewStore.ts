import { defineStore } from "pinia";
interface Review {
  id: number;
  name: string;
  text: string;
  rating: number;
  date: string;
}

export const useReviewStore = defineStore("reviewStore", {
  state: () => ({
    reviews: JSON.parse(localStorage.getItem("reviews") || "[]") as Review[],
    filteredReviews: [] as Review[],
  }),
  actions: {
    addReview(review: Review) {
      this.reviews.push(review);
      this.saveToLocalStorage();
      this.updateFilteredReviews();
    },
    removeReview(id: number) {
      this.reviews = this.reviews.filter((review) => review.id !== id);
      this.saveToLocalStorage();
      this.updateFilteredReviews();
    },
    saveToLocalStorage() {
      localStorage.setItem("reviews", JSON.stringify(this.reviews));
    },
    updateFilteredReviews(filter: string = "all", sort: string = "newest") {
      let filtered = [...this.reviews];

      if (filter !== "all") {
        filtered = filtered.filter(
          (review) => review.rating === Number(filter)
        );
      }
      if (sort === "newest") {
        filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      } else if (sort === "oldest") {
        filtered.sort(
          (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
        );
      } else if (sort === "highest") {
        filtered.sort((a, b) => b.rating - a.rating);
      } else if (sort === "lowest") {
        filtered.sort((a, b) => a.rating - b.rating);
      }

      this.filteredReviews = filtered;
    },
  },
});
