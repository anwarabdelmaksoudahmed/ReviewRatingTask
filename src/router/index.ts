import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import endUserRoutes from "../modules/endUser.routes";

const routes: Array<RouteRecordRaw> = [...endUserRoutes];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
