import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import {
  ContactUsToday,
  FlatCards,
  OurPhilosophy,
  OurStepByStep,
} from './components';

export const metadata: Metadata = {
  title: 'Our Approach – Turning Insight Into Impact | Hostixie',
  description:
    'Discover Hostixie’s strategic process connecting research, creativity, advertising, and communication — from discovery to continuous improvement.',
  openGraph: {
    title: 'Our Approach – Turning Insight Into Impact | Hostixie',
    description:
      'Discover Hostixie’s strategic process connecting research, creativity, advertising, and communication — from discovery to continuous improvement.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Approach – Turning Insight Into Impact | Hostixie',
    description:
      'Discover Hostixie’s strategic process connecting research, creativity, advertising, and communication — from discovery to continuous improvement.',
  },
};

export default async function OurApproach() {
  const t = await getTranslations('ourApproach.hero');

  return (
    <main>
      <PageHero
        layoutClassName="h-225 max-[1300px]:h-300"
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0')}
            </span>{' '}
            <br /> {t('title.1')}{' '}
            <span className="text-primary">{t('title.2')}</span>
          </>
        }
        subtitle={t('subtitle')}
        text={t('text')}
      />
      <OurPhilosophy />
      <OurStepByStep />
      <FlatCards />
      <ContactUsToday />
    </main>
  );
}
