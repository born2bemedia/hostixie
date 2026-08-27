import type { getTranslations } from 'next-intl/server';

export const getLatest = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/latest-1.jpg',
    date: t('latestNews.cards.0.date'),
    title: t('latestNews.cards.0.title'),
    description: t('latestNews.cards.0.description'),
    summary: t('latestNews.cards.0.summary'),
    btnLabel: t('latestNews.cards.0.btnLabel'),
    href: '/news/clean-portfolio-site-for-a-visual-artist',
    slug: 'clean-portfolio-site-for-a-visual-artist',
  },
  {
    imgUrl: '/images/news/latest-2.jpg',
    date: t('latestNews.cards.1.date'),
    title: t('latestNews.cards.1.title'),
    description: t('latestNews.cards.1.description'),
    summary: t('latestNews.cards.1.summary'),
    btnLabel: t('latestNews.cards.1.btnLabel'),
    href: '/news/hosting-just-got-faster-again',
    slug: 'hosting-just-got-faster-again',
  },
  {
    imgUrl: '/images/news/latest-3.jpg',
    date: t('latestNews.cards.2.date'),
    title: t('latestNews.cards.2.title'),
    description: t('latestNews.cards.2.description'),
    summary: t('latestNews.cards.2.summary'),
    btnLabel: t('latestNews.cards.2.btnLabel'),
    href: '/news/e-commerce-makeover-2x-sales-in-90-days',
    slug: 'e-commerce-makeover-2x-sales-in-90-days',
  },
];

export const getTechNews = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/tech-1.jpg',
    date: t('techNews.cards.0.date'),
    title: t('techNews.cards.0.title'),
    description: t('techNews.cards.0.description'),
    summary: t('techNews.cards.0.summary'),
    btnLabel: t('techNews.cards.0.btnLabel'),
    href: '/news/we-launched-managed-wordpress-hosting',
    slug: 'we-launched-managed-wordpress-hosting',
  },
  {
    imgUrl: '/images/news/tech-2.jpg',
    date: t('techNews.cards.1.date'),
    title: t('techNews.cards.1.title'),
    description: t('techNews.cards.1.description'),
    summary: t('techNews.cards.1.summary'),
    btnLabel: t('techNews.cards.1.btnLabel'),
    href: '/news/invoices-upgraded',
    slug: 'invoices-upgraded',
  },
  {
    imgUrl: '/images/news/tech-3.jpg',
    date: t('techNews.cards.2.date'),
    title: t('techNews.cards.2.title'),
    description: t('techNews.cards.2.description'),
    summary: t('techNews.cards.2.summary'),
    btnLabel: t('techNews.cards.2.btnLabel'),
    href: '/news/partnerships-people',
    slug: 'partnerships-people',
  },
];

export const getPartnershipNews = (
  t: Awaited<ReturnType<typeof getTranslations>>,
) => [
  {
    imgUrl: '/images/news/partner-1.jpg',
    date: t('partnershipNews.cards.0.date'),
    title: t('partnershipNews.cards.0.title'),
    description: t('partnershipNews.cards.0.description'),
    btnLabel: t('partnershipNews.cards.0.btnLabel'),
    href: '/news/regional-dev-workshop-hosted',
    slug: 'regional-dev-workshop-hosted',
  },
  {
    imgUrl: '/images/news/partner-2.jpg',
    date: t('partnershipNews.cards.1.date'),
    title: t('partnershipNews.cards.1.title'),
    description: t('partnershipNews.cards.1.description'),
    btnLabel: t('partnershipNews.cards.1.btnLabel'),
    href: '/news/open-source-sprint-participation',
    slug: 'open-source-sprint-participation',
  },
  {
    imgUrl: '/images/news/partner-3.jpg',
    date: t('partnershipNews.cards.2.date'),
    title: t('partnershipNews.cards.2.title'),
    description: t('partnershipNews.cards.2.description'),
    btnLabel: t('partnershipNews.cards.2.btnLabel'),
    href: '/news/senior-ux-expertise-added',
    slug: 'senior-ux-expertise-added',
  },
];
