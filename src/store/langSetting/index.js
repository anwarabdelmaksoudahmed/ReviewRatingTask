import getters from "./getters";
import actions from "./action";
import mutations from "./mutations";

const state = {
  lang: {
    title: "العربية",
    value: "ar",
    rtl: true,
  },
  langOption: [
    {
      title: "العربية",
      value: "ar",

      rtl: true,
    },
    {
      title: "English",
      value: "en",

      rtl: false,
    },
  ],
  activePage: {
    name: "Dashboard",
  },
  layoutMode: {
    dark: false,
    rtl: true,
    sidebar: "",
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
