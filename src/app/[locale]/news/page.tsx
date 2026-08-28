import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import {
  getLatest,
  getPartnershipNews,
  getTechNews,
} from '@/features/news/model/previews';
import { NewsList } from '@/features/news/ui/news-list';

import { GotProject, Hero } from './components';

export const metadata: Metadata = {
  title: 'Advertising & Marketing News | Hostixie',
  description:
    'Read the latest Hostixie updates, campaign developments, research initiatives, partnerships, and news from our advertising and marketing work.',
  openGraph: {
    title: 'Advertising & Marketing News | Hostixie',
    description:
      'Read the latest Hostixie updates, campaign developments, research initiatives, partnerships, and news from our advertising and marketing work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Advertising & Marketing News | Hostixie',
    description:
      'Read the latest Hostixie updates, campaign developments, research initiatives, partnerships, and news from our advertising and marketing work.',
  },
};

export default async function News() {
  const t = await getTranslations('news');

  const latest = getLatest(t);
  const techNews = getTechNews(t);
  const partnershipNews = getPartnershipNews(t);

  return (
    <main>
      <Hero />
      <NewsList heading={t('latestNews.title')} items={latest} />
      <NewsList heading={t('techNews.title')} items={techNews} />
      <NewsList heading={t('partnershipNews.title')} items={partnershipNews} />
      <GotProject />
    </main>
  );
}
