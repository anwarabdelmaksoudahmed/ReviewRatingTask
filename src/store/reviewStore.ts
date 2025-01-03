// import { defineStore } from "pinia";

// interface Review {
//   id: number;
//   name: string;
//   text: string;
//   rating: number;
//   date: string;
// }

// export const useReviewStore = defineStore("reviewStore", {
//   state: () => ({
//     reviews: [] as Review[],
//   }),
//   actions: {
//     addReview(review: Review) {
//       this.reviews.push(review);
//     },
//     removeReview(id: number) {
//       this.reviews = this.reviews.filter((review) => review.id !== id);
//     },
//   },
// });

// new code /////////////
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
  }),
  actions: {
    addReview(review: Review) {
      this.reviews.push(review);
      this.saveToLocalStorage();
    },
    removeReview(id: number) {
      this.reviews = this.reviews.filter((review) => review.id !== id);
      this.saveToLocalStorage();
    },
    saveToLocalStorage() {
      localStorage.setItem("reviews", JSON.stringify(this.reviews));
    },
  },
});
