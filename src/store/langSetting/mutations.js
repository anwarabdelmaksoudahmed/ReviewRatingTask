export default {
  setLangCommit(state, data) {
    const selectLang = state.langOption.find((lan) => lan.value === data.value);
    state.lang = selectLang;
  },
  layoutModeCommit(state, data) {
    state.layoutMode = data;
  },
};
