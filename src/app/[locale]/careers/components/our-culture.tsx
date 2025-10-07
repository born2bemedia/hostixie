'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

export const OurCulture = () => {
  const t = useTranslations('careers.ourCulture');

  return (
    <section className="relative bg-black pt-20 pb-40">
      <div className="container flex gap-10 max-lg:flex-col max-md:gap-20">
        <Card
          title={t('0.title', { fallback: 'Purpose & People' })}
          text={t('0.text', {
            fallback:
              'We believe the best work comes from empowered people working toward shared goals. That’s why we value clear communication, transparency, and a healthy balance between delivering results and staying human. We also actively support diversity in tech and encourage applicants from underrepresented backgrounds.',
          })}
        />
        <Card
          title={t('1.title', { fallback: 'Our Culture' })}
          text={t('1.text', {
            fallback: 'How does work life here compare to elsewhere?',
          })}
          list={[
            t('1.list.0', {
              fallback: 'Minimal hierarchy, maximum accountability',
            }),
            t('1.list.1', {
              fallback: 'Weekly team standups, async-first communication',
            }),
            t('1.list.2', { fallback: 'Projects you can be proud of' }),
            t('1.list.3', {
              fallback: 'No micromanagement — just support and clarity',
            }),
          ]}
          highlight
        />
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[134px] w-full object-cover"
        src="/images/careers/bbw.svg"
        alt="bb"
        width={1440}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  title,
  text,
  highlight = false,
  list = [],
}: {
  title: string;
  text: string;
  highlight?: boolean;
  list?: string[];
}) => (
  <article
    className={cn(
      'relative flex w-1/2 flex-col gap-10 max-lg:w-full',
      highlight && 'rounded-lg bg-[rgba(255,244,225,0.10)] p-5',
    )}
  >
    <div className="flex justify-end">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="45"
        viewBox="0 0 32 45"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M3.67176e-06 0.800046L26 0.800048C27.3333 0.800049 30 2.00005 30 6.80005C30 11.6 30 32.8 30 42.8"
          stroke="#FFF4E1"
        />
        <circle
          cx="30"
          cy="42.3"
          r="2"
          transform="rotate(-180 30 42.3)"
          fill="#FFF4E1"
        />
      </svg>
    </div>
    <div className="flex flex-col gap-2 px-5">
      <Text size="3xl" weight={500}>
        {title}
      </Text>
      <Text size="xl" weight={500} className="opacity-50">
        {text}
      </Text>
      <ul className="flex flex-col gap-2">
        {list.map(item => (
          <li key={item} className="flex items-center gap-2.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
              className="shrink-0"
            >
              <path
                d="M3.5 7.30002V5.74252C3.5 3.81169 4.87083 3.01836 6.545 3.98669L7.8925 4.76836L9.24 5.55002C10.9142 6.51836 10.9142 8.09919 9.24 9.06752L7.8925 9.84919L6.545 10.6309C4.87083 11.5817 3.5 10.7942 3.5 8.85752V7.30002Z"
                stroke="#FFF4E1"
                strokeWidth="1.5"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <Text size="xl" weight={500} className="opacity-50">
              {item}
            </Text>
          </li>
        ))}
      </ul>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="45"
      viewBox="0 0 32 45"
      fill="none"
      className="shrink-0"
    >
      <path
        d="M32 43.8001L6 43.8C4.66666 43.8 2 42.6 2 37.8C2 33 2 11.8 2 1.80005"
        stroke="#FFF4E1"
      />
      <circle cx="2" cy="2.30005" r="2" fill="#FFF4E1" />
    </svg>
  </article>
);
