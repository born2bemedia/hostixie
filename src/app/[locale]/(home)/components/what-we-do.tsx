'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { HeroTitle } from '@/shared/ui/components/hero-title';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { BlendIcon } from '@/shared/ui/icons/blend';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('steps.0.title', { fallback: 'Shared Hosting' }),
    text: t('steps.0.text', {
      fallback:
        'Ideal for small websites and businesses, offering a cost-effective and reliable way to get online quickly.',
    }),
  },
  {
    title: t('steps.1.title', { fallback: 'VPS Hosting' }),
    text: t('steps.1.text', {
      fallback:
        'A more robust and scalable option for websites that require dedicated resources. Enjoy the benefits of a dedicated server at a fraction of the cost.',
    }),
  },
  {
    title: t('steps.2.title', { fallback: 'Dedicated Hosting' }),
    text: t('steps.2.text', {
      fallback:
        'Complete control over your hosting environment. Perfect for high-traffic websites, e-commerce platforms, or projects that require top-tier performance.',
    }),
  },
  {
    title: t('steps.3.title', { fallback: 'Cloud Hosting' }),
    text: t('steps.3.text', {
      fallback:
        'Scalable and flexible cloud-based hosting solutions for dynamic websites that need to adapt quickly to increasing traffic or complex demands.',
    }),
  },
  {
    title: t('steps.4.title', { fallback: 'Managed WordPress Hosting' }),
    text: t('steps.4.text', {
      fallback:
        'Optimized hosting designed specifically for WordPress websites, with automatic updates, daily backups, and enhanced security.',
    }),
  },
];

const getDevSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('devSteps.0.title', { fallback: 'Custom Website Development' }),
    text: t('devSteps.0.text', {
      fallback:
        'Whether you need a portfolio, personal blog, or custom business website, we craft tailored solutions that perfectly match your needs.',
    }),
  },
  {
    title: t('devSteps.1.title', { fallback: 'E-commerce Solutions' }),
    text: t('devSteps.1.text', {
      fallback:
        'Build your online store with powerful e-commerce platforms like Shopify, WooCommerce, and Magento to deliver an exceptional shopping experience.',
    }),
  },
  {
    title: t('devSteps.2.title', { fallback: 'UX/UI Design' }),
    text: t('devSteps.2.text', {
      fallback:
        'By focusing on user needs, accessibility, and responsive design, we create intuitive, user-friendly designs that ensure your visitors have a pleasant and engaging experience.',
    }),
  },
  {
    title: t('devSteps.3.title', {
      fallback: 'Website Redesign & Maintenance',
    }),
    text: t('devSteps.3.text', {
      fallback:
        'Need a refresh or continuous support? Our team can redesign your website to reflect modern design trends and maintain it for optimal performance.',
    }),
  },
  {
    title: t('devSteps.4.title', { fallback: 'SEO Optimization' }),
    text: t('devSteps.4.text', {
      fallback:
        'We implement best practices for on-page SEO, ensuring your website ranks higher on search engines and attracts organic traffic.',
    }),
  },
];

export const WhatWeDo = () => {
  const [displayType, setDisplayType] = useState<'hosting' | 'development'>(
    'hosting',
  );

  const t = useTranslations('home.whatWeDo');

  const steps = getSteps(t);
  const devSteps = getDevSteps(t);

  return (
    <section className="container flex flex-col gap-10 pt-[76px]">
      <HeroTitle
        title={t('title', { fallback: 'What We Do' })}
        subtitle={t('subtitle', {
          fallback:
            'Our Services at a Glance: Customized Solutions for Your Online Needs',
        })}
        text={t('text', {
          fallback:
            'At Hostixie, we specialize in offering robust, flexible web hosting solutions and custom web development services designed to meet your unique digital needs.',
        })}
      />
      <section className="rounded-xl border border-[#A4A189]">
        <section className="flex gap-2 max-md:flex-col">
          <div className="flex w-1/2 flex-col gap-5 border-r border-[#A4A189] py-5 pr-2 pl-5 max-md:w-full max-md:border-r-0 max-md:border-b">
            <Image
              className="h-[429px] w-full object-cover"
              src="/images/home/web-hosting.jpg"
              alt="web-hosting"
              width={632}
              height={429}
              unoptimized
            />
            <section className="flex flex-col gap-2.5">
              <button
                className="flex cursor-pointer items-center gap-5 transition-opacity duration-300 ease-in-out hover:opacity-80 max-md:text-left"
                onClick={() => setDisplayType('hosting')}
              >
                {displayType === 'hosting' && <BlendIcon />}
                <Title
                  as="h4"
                  size="6xl"
                  className={cn(
                    displayType === 'development'
                      ? 'opacity-20'
                      : 'opacity-100',
                  )}
                >
                  {t('webHosting', { fallback: 'Web Hosting' })}
                </Title>
              </button>
              <button
                className="flex cursor-pointer items-center gap-5 transition-opacity duration-300 ease-in-out hover:opacity-80 max-md:text-left"
                onClick={() => setDisplayType('development')}
              >
                {displayType === 'development' && <BlendIcon />}
                <Title
                  as="h4"
                  size="6xl"
                  className={cn(
                    displayType === 'development'
                      ? 'opacity-100'
                      : 'opacity-20',
                  )}
                >
                  {t('webDevelopment', { fallback: 'Web Development' })}
                </Title>
              </button>
            </section>
          </div>
          <section className="flex w-1/2 flex-col max-md:w-full">
            {displayType === 'hosting'
              ? steps.map((step, i) => (
                  <Card
                    key={step.title}
                    title={step.title}
                    text={step.text}
                    i={i}
                  />
                ))
              : devSteps.map((step, i) => (
                  <Card
                    key={step.title}
                    title={step.title}
                    text={step.text}
                    i={i}
                  />
                ))}
          </section>
        </section>
        <div className="rounded-xl border-t border-[#A4A189] p-4">
          <LargeActionBtn
            href={
              displayType === 'hosting' ? '/web-hosting' : '/web-development'
            }
          >
            {displayType === 'hosting'
              ? t('uncoverMoreOptions', { fallback: 'Uncover More Options' })
              : t('browseMoreOfferings', { fallback: 'Browse More Offerings' })}
          </LargeActionBtn>
        </div>
      </section>
    </section>
  );
};

const Card = ({
  title,
  text,
  i,
}: {
  title: string;
  text: string;
  i: number;
}) => (
  <article className="ml-auto flex w-full max-w-[528px] items-center justify-between gap-3.5 max-md:m-0 max-md:max-w-full max-md:gap-6 max-md:px-5">
    <div className="flex flex-col gap-2 py-20 max-md:py-10">
      <Title as="h5" size="5xl">
        {title}
      </Title>
      <Text size="base" color="grey">
        {text}
      </Text>
    </div>
    <span className="flex items-center gap-2">
      <Text size="xs" color="grey">
        00{++i}
      </Text>
      <span className="h-0.5 w-8 bg-[#A4A189]" />
    </span>
  </article>
);
