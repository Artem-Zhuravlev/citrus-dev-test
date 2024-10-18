import { createI18n } from 'vue-i18n';
import { regions } from './regions';
import { kpi } from './kpi';
import { month } from './month';

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'ua',
  messages: {
    en: {
      regions: { ...regions.en },
      kpi: { ...kpi.en },
      month: { ...month.en }
    },
    ua: {
      regions: { ...regions.ua },
      kpi: { ...kpi.ua },
      month: { ...month.ua }
    }
  }
});
