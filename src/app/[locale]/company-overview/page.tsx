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
  WhyChooseUs,
} from './components';

export const metadata: Metadata = {
  title: 'About Hostixie – Company Overview & Mission | Hostixie',
  description:
    'Learn about Hostixie’s mission, vision, and expertise. Over 500 projects delivered with excellence in hosting and web development.',
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

export default async function CompanyOverview() {
  const t = await getTranslations('companyOverview.hero');
  const to = await getTranslations('companyOverview');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0', { fallback: 'Company Overview:' })}
            </span>{' '}
            <br /> {t('title.1', { fallback: 'Shaping Your' })} <br />
            <span className="text-primary">
              {t('title.2', { fallback: 'Brand’s Digital Success' })}
            </span>
          </>
        }
        subtitle={t('subtitle', {
          fallback:
            'A Trusted Partner for Businesses Seeking Scalable, High-Impact Web Solutions',
        })}
        layoutClassName="h-[950px] max-[1300px]:h-[1250px] max-md:h-[900px]"
        text={t('text', {
          fallback:
            'At Hostixie, our strategy combines industry expertise with cutting-edge technology to create seamless, scalable solutions that drive results. From startups to established enterprises, we collaborate with our clients to help them achieve their digital goals and enhance their online presence. Here’s an inside look at who we are, what we do, and how we can help your project thrive in the digital landscape.',
        })}
      />
      <OurStory />
      <CoreValues />
      <TextValue
        title={to('ourTeam.title', { fallback: 'Our Team' })}
        subtitle={to('ourTeam.subtitle', {
          fallback: 'The Experts Behind Your Success',
        })}
        text={to('ourTeam.text', {
          fallback:
            'At Hostixie, we have a talented team of experts who bring their knowledge, creativity, and passion to every project. From skilled web developers and innovative designers to marketing specialists and customer support professionals, our team works seamlessly together to deliver high-quality, tailored solutions. We are committed to pushing the boundaries of what’s possible, ensuring that each client receives personalized service and outstanding results every time.',
        })}
      />
      <Achievments />
      <WhyChooseUs />
      <TextValue
        title="Our Impact"
        subtitle={
          <>
            {to('ourImpact.subtitle.0', {
              fallback: 'Shaping the Digital World,',
            })}{' '}
            <br />
            {to('ourImpact.subtitle.1', {
              fallback: 'One Project at a Time',
            })}
          </>
        }
        text={to('ourImpact.text', {
          fallback:
            'We’re not just building websites — we’re helping businesses grow, innovate, and thrive in the digital world. From increasing traffic and conversions to enhancing user engagement and delivering long-term digital solutions, our work makes a tangible difference for our clients. We take pride in knowing that our solutions help our clients achieve measurable success and drive real business results.',
        })}
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
