import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { GetInTouch, Jobs, OurCulture, WhyJoinUs } from './components';

export const metadata: Metadata = {
  title: 'Careers at Hostixie | Advertising & Communications',
  description:
    'Explore opportunities to work across advertising, marketing, communications, market research, PR, and creative projects at Hostixie.',
  openGraph: {
    title: 'Careers at Hostixie | Advertising & Communications',
    description:
      'Explore opportunities to work across advertising, marketing, communications, market research, PR, and creative projects at Hostixie.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Hostixie | Advertising & Communications',
    description:
      'Explore opportunities to work across advertising, marketing, communications, market research, PR, and creative projects at Hostixie.',
  },
};

export default async function Careers() {
  const t = await getTranslations('careers.hero');

  return (
    <main>
      <PageHero
        title={
          <>
            {t('title.0')}{' '}
            <span className="text-primary">{t('title.1')}</span>
          </>
        }
        text={t('text')}
      />
      <WhyJoinUs />
      <Jobs />
      <OurCulture />
      <GetInTouch />
    </main>
  );
}
