import { createI18n } from 'vue-i18n';
import { regions } from './regions';

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ua',
  messages: {
    en: {
      regions: { ...regions.en }

    },
    ua: {
      regions: { ...regions.ua }
    }
  }
});
