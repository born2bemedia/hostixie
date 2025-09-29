import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'de', 'it'],
  localePrefix: 'as-needed',
  localeDetection: false,
  defaultLocale: 'en',
});
