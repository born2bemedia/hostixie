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
  title: 'Hostixie Newsroom – Advertising, Marketing & Communications | Hostixie',
  description:
    'Explore recent client projects, market research initiatives, campaign developments, new capabilities, team updates, and industry activities from Hostixie.',
  openGraph: {
    title:
      'Hostixie Newsroom – Advertising, Marketing & Communications | Hostixie',
    description:
      'Explore recent client projects, market research initiatives, campaign developments, new capabilities, team updates, and industry activities from Hostixie.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Hostixie Newsroom – Advertising, Marketing & Communications | Hostixie',
    description:
      'Explore recent client projects, market research initiatives, campaign developments, new capabilities, team updates, and industry activities from Hostixie.',
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
