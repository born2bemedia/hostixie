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
  title: 'Our Approach to Advertising & Marketing | Hostixie',
  description:
    'A structured, collaborative approach to advertising, marketing, research, PR, and communications projects, from initial strategy through delivery and evaluation.',
  openGraph: {
    title: 'Our Approach to Advertising & Marketing | Hostixie',
    description:
      'A structured, collaborative approach to advertising, marketing, research, PR, and communications projects, from initial strategy through delivery and evaluation.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Approach to Advertising & Marketing | Hostixie',
    description:
      'A structured, collaborative approach to advertising, marketing, research, PR, and communications projects, from initial strategy through delivery and evaluation.',
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
            {t('title.0')}{' '}
            <span className="text-primary">{t('title.1')}</span>
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
