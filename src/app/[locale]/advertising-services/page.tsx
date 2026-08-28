import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { FeatureHero } from '@/shared/ui/components/feature-hero';

import {
  AdvertisingPackages,
  AdvertisingServices,
  DownloadPrice,
  FullRange,
} from './components';
import { ReadyChoosePlan } from './ready-choose-plan';

export const metadata: Metadata = {
  title: 'B2B Advertising Services | Hostixie',
  description:
    'Strategic advertising services covering campaign planning, creative development, media placement, campaign management, and performance optimization.',
  openGraph: {
    title: 'B2B Advertising Services | Hostixie',
    description:
      'Strategic advertising services covering campaign planning, creative development, media placement, campaign management, and performance optimization.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'B2B Advertising Services | Hostixie',
    description:
      'Strategic advertising services covering campaign planning, creative development, media placement, campaign management, and performance optimization.',
  },
};

export default async function WebHosting() {
  const t = await getTranslations('webHosting');

  return (
    <main className="overflow-x-hidden">
      <FeatureHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        text={t('hero.text')}
      />
      <AdvertisingServices />
      <FullRange />
      <DownloadPrice />
      <AdvertisingPackages />
      <ReadyChoosePlan />
    </main>
  );
}
