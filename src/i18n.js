// by webpack
import { createI18n } from "vue-i18n";

const messages = {};
const requireContext = require.context("./", true, /locales\/.*\.json$/);

requireContext.keys().forEach((filePath) => {
  const localeMatch = filePath.match(/locales\/(.*)\.json$/);
  if (localeMatch) {
    const locale = localeMatch[1];
    messages[locale] = messages[locale] || {};
    Object.assign(messages[locale], requireContext(filePath));
  }
});

const i18n = createI18n({
  locale: localStorage.getItem("language") || "en",
  fallbackLocale: "en",
  messages,
});

export default i18n;
