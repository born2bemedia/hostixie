import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { GetInTouch, Jobs, OurCulture, WhyJoinUs } from './components';

export const metadata: Metadata = {
  title: 'Careers – Join Hostixie | Hostixie',
  description:
    'Explore career opportunities at Hostixie. Join a collaborative advertising and communications team where you can grow your expertise and own meaningful work.',
  openGraph: {
    title: 'Careers – Join Hostixie | Hostixie',
    description:
      'Explore career opportunities at Hostixie. Join a collaborative advertising and communications team where you can grow your expertise and own meaningful work.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers – Join Hostixie | Hostixie',
    description:
      'Explore career opportunities at Hostixie. Join a collaborative advertising and communications team where you can grow your expertise and own meaningful work.',
  },
};

export default async function Careers() {
  const t = await getTranslations('careers.hero');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0')}
            </span>{' '}
            <br /> {t('title.1')} <br />
            <span className="text-primary">{t('title.2')}</span>
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
