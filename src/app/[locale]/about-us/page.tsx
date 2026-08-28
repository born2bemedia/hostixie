import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import {
  Achievments,
  CoreValues,
  LetsStart,
  OurStory,
  TextValue,
  WhatWeDo,
  WhyChooseUs,
} from './components';

export const metadata: Metadata = {
  title: 'About Hostixie | Advertising & Marketing Agency',
  description:
    'Hostixie is an agency providing advertising, marketing, research, public relations, communications, and graphic design services for businesses and organizations.',
  openGraph: {
    title: 'About Hostixie | Advertising & Marketing Agency',
    description:
      'Hostixie is an agency providing advertising, marketing, research, public relations, communications, and graphic design services for businesses and organizations.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Hostixie | Advertising & Marketing Agency',
    description:
      'Hostixie is an agency providing advertising, marketing, research, public relations, communications, and graphic design services for businesses and organizations.',
  },
};

export default async function CompanyOverview() {
  const t = await getTranslations('companyOverview.hero');
  const to = await getTranslations('companyOverview');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0')}
            </span>
            <br />
            {t('title.1')}
          </>
        }
        subtitle={t('subtitle')}
        layoutClassName="h-225 max-[1300px]:h-300"
        text={t('text')}
      />
      <OurStory />
      <CoreValues />
      <WhatWeDo />
      <TextValue
        title={to('ourTeam.title')}
        subtitle={to('ourTeam.subtitle')}
        text={to('ourTeam.text')}
        bullets={[
          to('ourTeam.bullets.0'),
          to('ourTeam.bullets.1'),
          to('ourTeam.bullets.2'),
          to('ourTeam.bullets.3'),
          to('ourTeam.bullets.4'),
        ]}
      />
      <Achievments />
      <WhyChooseUs />
      <TextValue
        title={to('ourImpact.title')}
        subtitle={
          <>
            {to('ourImpact.subtitle.0')} <br />
            {to('ourImpact.subtitle.1')}
          </>
        }
        text={to('ourImpact.text')}
        additionalContent={
          <Image
            className="absolute bottom-0 left-0 h-[204px] w-full object-cover"
            src="/images/company-overview/bbw.svg"
            alt="bbw"
            width={1440}
            height={100}
            unoptimized
          />
        }
        layoutClassName="pb-[140px] max-md:pb-[100px]"
      />
      <LetsStart />
    </main>
  );
}
