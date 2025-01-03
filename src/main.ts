import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./assets/tailwind.css";
import i18n from "./i18n";
import { configure } from "vee-validate";
configure({
  validateOnInput: true,
});
const app = createApp(App);
const pinia = createPinia();
app.use(pinia);
app.use(i18n);
app.use(store).use(router).mount("#app");
