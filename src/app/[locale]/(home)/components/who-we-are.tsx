'use client';

import { useTranslations } from 'next-intl';

import { GreyDot } from '@/shared/ui/components/grey-dot';
import { HeroTitle } from '@/shared/ui/components/hero-title';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getSteps = (t: ReturnType<typeof useTranslations>) => [
  {
    label: t('steps.0.label', {
      fallback: 'of the team’s combined experience',
    }),
    value: t('steps.0.value', { fallback: '10+ Years' }),
  },
  {
    label: t('steps.1.label', { fallback: 'successful projects delivered' }),
    value: t('steps.1.value', { fallback: '500+' }),
  },
  {
    label: t('steps.2.label', { fallback: 'satisfied clients' }),
    value: t('steps.2.value', { fallback: '200+' }),
  },
  {
    label: t('steps.3.label', { fallback: 'uptime for our hosting solutions' }),
    value: t('steps.3.value', { fallback: '99.9%' }),
  },
  {
    label: t('steps.4.label', { fallback: 'websites developed from scratch' }),
    value: t('steps.4.value', { fallback: '50+' }),
  },
  {
    label: t('steps.5.label', { fallback: 'client satisfaction rate' }),
    value: t('steps.5.value', { fallback: '98%' }),
  },
];

export const WhoWeAre = () => {
  const t = useTranslations('home.whoWeAre');

  const steps = getSteps(t);

  return (
    <section className="container flex flex-col gap-10 pt-[174px] max-md:pt-[126px]">
      <HeroTitle
        title={t('title', { fallback: 'Who We Are' })}
        subtitle={t('subtitle', {
          fallback: 'Driven by Results and Innovation',
        })}
        text={t('text', {
          fallback:
            'Hostixie is a young and dynamic agency passionate about providing reliable, scalable web hosting and web development solutions. We’re proud to work with clients across various sectors, consistently delivering top-notch results.',
        })}
      />
      <section className="flex flex-col gap-10 border-t border-t-[#A4A189] pt-[48px]">
        <Title as="h3" size="5xl">
          {t('keyStats', { fallback: 'Key Stats About Us:' })}
        </Title>
        <section className="flex flex-col gap-8">
          <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-2">
            {steps.map(step => (
              <GridCard key={step.label} {...step} />
            ))}
          </div>
          <div className="rounded-xl border border-[#A4A189] p-4">
            <LargeActionBtn href="/company-overview">
              {t('exploreOurStory', { fallback: 'Explore Our Story' })}
            </LargeActionBtn>
          </div>
        </section>
      </section>
    </section>
  );
};

const GridCard = ({ label, value }: { label: string; value: string }) => (
  <div className="relative flex flex-col gap-[65px] rounded-xl border border-[#A4A189] p-6 max-md:gap-6">
    <Text color="grey" size="xs" className="max-md:h-[36px]" uppercase>
      {label}
    </Text>
    <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-2">
      <span className="bg-primary h-4 w-4 rounded-full" />
      <Text
        size="5xl"
        className="text-[38px] max-md:text-[32px] max-md:leading-[120%]"
      >
        {value}
      </Text>
      <span />
    </div>
    <GreyDot className="absolute top-6 right-6" />
    <GreyDot className="absolute right-6 bottom-6" />
    <GreyDot className="absolute bottom-6 left-6" />
    <div />
  </div>
);
