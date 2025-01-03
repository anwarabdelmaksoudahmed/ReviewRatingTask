export default {
  activePageAction(context, payload) {
    context.commit("activePageCommit", payload);
  },
  setLangAction(context, payload) {
    context.commit("setLangCommit", payload);
  },
  layoutModeAction(context, payload) {
    // const rtl = payload.rtl ? 'rtl' : 'ltr'
    document
      .getElementsByTagName("html")[0]
      .setAttribute(
        "dir",
        localStorage.getItem("lang") === "en" ? "ltr" : "rtl"
      );
    context.commit("layoutModeCommit", {
      rtl: payload.rtl,
      sidebar: "",
    });
  },
};
