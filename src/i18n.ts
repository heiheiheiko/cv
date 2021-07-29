import { createI18n } from 'vue-i18n';
import de from './locales/de';
import en from './locales/en';

const datetimeFormats = {
  de: {
    short: {
      year: 'numeric',
      month: 'short',
    },
  },
  en: {
    short: {
      year: 'numeric',
      month: 'short',
    },
  },
};

export default createI18n({
  datetimeFormats,
  legacy: false,
  locale: process.env.VUE_APP_I18N_LOCALE || 'en',
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || 'en',
  globalInjection: true,
  messages: { de, en },
});
