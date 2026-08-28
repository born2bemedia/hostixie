import type { getTranslations } from 'next-intl/server';

export const getLatest = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/b2b-brand-positioning.png',
    date: t('latestNews.cards.0.date'),
    title: t('latestNews.cards.0.title'),
    description: t('latestNews.cards.0.description'),
    summary: t('latestNews.cards.0.summary'),
    btnLabel: t('latestNews.cards.0.btnLabel'),
    href: '/news/b2b-brand-positioning-project-completed-for-a-professional-services-firm',
    slug: 'b2b-brand-positioning-project-completed-for-a-professional-services-firm',
  },
  {
    imgUrl: '/images/news/market-research-manufacturing.png',
    date: t('latestNews.cards.1.date'),
    title: t('latestNews.cards.1.title'),
    description: t('latestNews.cards.1.description'),
    summary: t('latestNews.cards.1.summary'),
    btnLabel: t('latestNews.cards.1.btnLabel'),
    href: '/news/market-research-programme-shapes-expansion-strategy-for-a-manufacturing-client',
    slug: 'market-research-programme-shapes-expansion-strategy-for-a-manufacturing-client',
  },
  {
    imgUrl: '/images/news/integrated-b2b-campaign.png',
    date: t('latestNews.cards.2.date'),
    title: t('latestNews.cards.2.title'),
    description: t('latestNews.cards.2.description'),
    summary: t('latestNews.cards.2.summary'),
    btnLabel: t('latestNews.cards.2.btnLabel'),
    href: '/news/integrated-b2b-campaign-supports-a-new-service-launch',
    slug: 'integrated-b2b-campaign-supports-a-new-service-launch',
  },
];

export const getTechNews = (t: Awaited<ReturnType<typeof getTranslations>>) => [
  {
    imgUrl: '/images/news/new-market-intelligence-framework.png',
    date: t('techNews.cards.0.date'),
    title: t('techNews.cards.0.title'),
    description: t('techNews.cards.0.description'),
    summary: t('techNews.cards.0.summary'),
    btnLabel: t('techNews.cards.0.btnLabel'),
    href: '/news/new-market-intelligence-research-framework-introduced',
    slug: 'new-market-intelligence-research-framework-introduced',
  },
  {
    imgUrl: '/images/news/client-reporting-campaign-visibility.png',
    date: t('techNews.cards.1.date'),
    title: t('techNews.cards.1.title'),
    description: t('techNews.cards.1.description'),
    summary: t('techNews.cards.1.summary'),
    btnLabel: t('techNews.cards.1.btnLabel'),
    href: '/news/client-reporting-campaign-visibility-upgraded',
    slug: 'client-reporting-campaign-visibility-upgraded',
  },
  {
    imgUrl: '/images/news/new-partnership-business-marketing.png',
    date: t('techNews.cards.2.date'),
    title: t('techNews.cards.2.title'),
    description: t('techNews.cards.2.description'),
    summary: t('techNews.cards.2.summary'),
    btnLabel: t('techNews.cards.2.btnLabel'),
    href: '/news/new-partnership-with-a-business-marketing-programme',
    slug: 'new-partnership-with-a-business-marketing-programme',
  },
];

export const getPartnershipNews = (
  t: Awaited<ReturnType<typeof getTranslations>>,
) => [
  {
    imgUrl: '/images/news/regional-b2b-marketing-workshop.png',
    date: t('partnershipNews.cards.0.date'),
    title: t('partnershipNews.cards.0.title'),
    description: t('partnershipNews.cards.0.description'),
    btnLabel: t('partnershipNews.cards.0.btnLabel'),
    href: '/news/regional-b2b-marketing-workshop-hosted',
    slug: 'regional-b2b-marketing-workshop-hosted',
  },
  {
    imgUrl: '/images/news/industry-research-roundtable.png',
    date: t('partnershipNews.cards.1.date'),
    title: t('partnershipNews.cards.1.title'),
    description: t('partnershipNews.cards.1.description'),
    btnLabel: t('partnershipNews.cards.1.btnLabel'),
    href: '/news/industry-research-roundtable-participation',
    slug: 'industry-research-roundtable-participation',
  },
  {
    imgUrl: '/images/news/senior-communications-strategy.png',
    date: t('partnershipNews.cards.2.date'),
    title: t('partnershipNews.cards.2.title'),
    description: t('partnershipNews.cards.2.description'),
    btnLabel: t('partnershipNews.cards.2.btnLabel'),
    href: '/news/senior-communications-strategy-expertise-added',
    slug: 'senior-communications-strategy-expertise-added',
  },
];
