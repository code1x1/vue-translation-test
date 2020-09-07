import Vue from 'vue';

import VueI18n from 'vue-i18n';

import { messages } from '@/lang/language-en';

Vue.use(VueI18n);

export const i18n = new VueI18n({
  locale: "en",
  messages: messages,
});

const loadedLanguages = ["en"]; // our default language that is preloaded

function setI18nLanguage(lang: string) {
  i18n.locale = lang;
  document.querySelector("html")?.setAttribute("lang", lang);
  return lang;
}

export function loadLanguageAsync(lang: string) {
  if (!lang) {
    lang = "en";
  }
  // If the same language
  if (i18n.locale === lang) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language was already loaded
  if (loadedLanguages.includes(lang)) {
    return Promise.resolve(setI18nLanguage(lang));
  }

  // If the language hasn't been loaded yet
  return import(
    /* webpackChunkName: "lang-[request]" */ `@/lang/language-${lang}.ts`
  ).then((messages) => {
    i18n.setLocaleMessage(lang, messages.default);
    loadedLanguages.push(lang);
    return setI18nLanguage(lang);
  });
}
