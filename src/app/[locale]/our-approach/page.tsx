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
  title: 'Our Approach to Hosting & Web Development | Hostixie',
  description:
    'Discover Hostixie’s step-by-step process: consultation, strategy, development, launch, and continuous support.',
  openGraph: {
    title: 'Our Approach to Hosting & Web Development | Hostixie',
    description:
      'Discover Hostixie’s step-by-step process: consultation, strategy, development, launch, and continuous support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Approach to Hosting & Web Development | Hostixie',
    description:
      'Discover Hostixie’s step-by-step process: consultation, strategy, development, launch, and continuous support.',
  },
};

export default async function OurApproach() {
  const t = await getTranslations('ourApproach.hero');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0', { fallback: 'Our Approach:' })}
            </span>{' '}
            <br /> {t('title.1', { fallback: 'Building Your' })} <br />
            <span className="text-primary">
              {t('title.2', { fallback: 'Digital Future' })}
            </span>
          </>
        }
        subtitle={t('subtitle', {
          fallback:
            'A Collaborative and Results-Driven Process to Turn Your Business Ambitions into Seamless, Scalable Solutions',
        })}
        text={t('text', {
          fallback:
            'We believe that every enterprise is unique and requires a personalized approach. Our process focuses on collaboration, innovation, and delivering exceptional results. We work closely with you at every stage, ensuring that your website or application not only meets your company’s goals but also exceeds your expectations. Here’s a deeper look into how we approach every project we undertake.',
        })}
      />
      <OurPhilosophy />
      <OurStepByStep />
      <FlatCards />
      <ContactUsToday />
    </main>
  );
}
