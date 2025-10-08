'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ClientResults = () => {
  const t = useTranslations('clients.clientResults');

  return (
    <section className="bg-[#FFF4E1] py-[60px] max-md:py-10">
      <div className="container flex flex-col gap-[48px]">
        <Divider />
        <section className="flex flex-col gap-10">
          <Title
            className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[24px] max-md:leading-[120%] max-md:tracking-[-0.48px]"
            weight={500}
            color="black"
          >
            {t('title', { fallback: 'At a Glance: Client Results' })}
          </Title>
          <section className="flex flex-col gap-8 max-md:hidden">
            <div className="flex min-h-[248px] gap-5">
              <Card
                label={t('cards.0', { fallback: 'Website Speed Improvements' })}
                title="+60%"
              />
              <Card
                label={t('cards.1', { fallback: 'Conversion Rates Increased' })}
                title="+45%"
              />
              <Card
                label={t('cards.2', { fallback: 'Organic Traffic Growth' })}
                title="+70%"
              />
            </div>
            <div className="flex min-h-[248px] gap-5">
              <Card
                label={t('cards.3', {
                  fallback: 'Customer Satisfaction Score',
                })}
                title="98%"
              />
              <Card
                label={t('cards.4', { fallback: 'Avg. Project Delivery Time' })}
                title="3-6 weeks"
              />
              <ExploreCard />
            </div>
          </section>
          <section className="hidden flex-col gap-2 max-md:flex">
            <div className="flex gap-2">
              <Card
                label={t('cards.0', { fallback: 'Website Speed Improvements' })}
                title="+60%"
                responsive
              />
              <Card
                label={t('cards.1', { fallback: 'Conversion Rates Increased' })}
                title="+45%"
                responsive
              />
            </div>
            <div className="flex gap-2">
              <Card
                label={t('cards.2', { fallback: 'Organic Traffic Growth' })}
                title="+70%"
                responsive
              />
              <Card
                label={t('cards.3', {
                  fallback: 'Customer Satisfaction Score',
                })}
                title="98%"
                responsive
              />
            </div>
            <Card
              label={t('cards.4', { fallback: 'Avg. Project Delivery Time' })}
              title="3-6 weeks"
            />
            <ExploreCard />
          </section>
        </section>
      </div>
    </section>
  );
};

const Card = ({
  title,
  label,
  responsive,
}: {
  title: string;
  label: string;
  responsive?: boolean;
}) => (
  <CardLayout
    className={cn(
      responsive &&
        'h-[248px] flex-1 flex-col items-start justify-center gap-2',
    )}
  >
    <span className="bg-primary h-4 w-4 shrink-0 rounded-full" />
    <Text
      size="3xl"
      color="black"
      weight={500}
      className="leading-[120%] tracking-[-0.48px] max-md:text-[42px]"
    >
      {title}
    </Text>
    <span />
    <GreyDot className="absolute top-6 right-6" />
    <GreyDot className="absolute right-6 bottom-6" />
    <GreyDot className="absolute bottom-6 left-6" />
    <Text size="xs" color="black" className="absolute top-6 left-6 opacity-50">
      {label}
    </Text>
  </CardLayout>
);

const ExploreCard = () => {
  const t = useTranslations('clients.clientResults.exploreCard');

  return (
    <CardLayout className="flex-col items-start">
      <div className="flex flex-col gap-2">
        <Text size="xl" color="black" weight={500}>
          {t('title', { fallback: 'Want to See More?' })}
        </Text>
        <Text
          color="black"
          size="base"
          className="leading-[120%] tracking-[-0.48px] opacity-30"
          weight={500}
        >
          {t('text', {
            fallback:
              'Take a deeper look at how we solve real problems with smart digital solutions.',
          })}
        </Text>
      </div>
      <Link
        href="/our-approach"
        className="flex h-[100px] w-full items-center justify-center rounded-[4px] bg-black/10"
      >
        <Text color="black" size="lg" weight={700}>
          {t('button', { fallback: 'Explore Our Process' })}
        </Text>
      </Link>
    </CardLayout>
  );
};

const GreyDot = ({ className }: { className?: string }) => (
  <span className={cn('h-1 w-1 bg-[#A4A189]', className)} />
);

const CardLayout = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <article
    className={cn(
      'relative flex h-auto min-h-[248px] flex-1 items-center justify-between gap-5 rounded-xl border border-[#A4A189] p-6 max-lg:min-h-[154px]',
      className,
    )}
  >
    {children}
  </article>
);
