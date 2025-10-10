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
  title: 'Hostixie News – Latest Hosting & Web Development Updates | Hostixie',
  description:
    'Stay updated on Hostixie’s latest launches, features, success stories, and industry insights.',
  openGraph: {
    title:
      'Hostixie News – Latest Hosting & Web Development Updates | Hostixie',
    description:
      'Stay updated on Hostixie’s latest launches, features, success stories, and industry insights.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Hostixie News – Latest Hosting & Web Development Updates | Hostixie',
    description:
      'Stay updated on Hostixie’s latest launches, features, success stories, and industry insights.',
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
      <NewsList
        heading={t('latestNews.title', {
          fallback: 'Latest Wins & Launches',
        })}
        items={latest}
      />
      <NewsList
        heading={t('techNews.title', {
          fallback: 'Tech & Team Updates',
        })}
        items={techNews}
      />
      <NewsList
        heading={t('partnershipNews.title', {
          fallback: 'Partnerships & People',
        })}
        items={partnershipNews}
      />
      <GotProject />
    </main>
  );
}
