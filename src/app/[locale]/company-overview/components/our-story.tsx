'use client';

import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurStory = () => {
  const t = useTranslations('companyOverview.ourStory');

  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container flex gap-10 max-lg:flex-col max-md:gap-20">
        <Card
          title={t('0.title', { fallback: 'Our Story' })}
          subtitle={t('0.subtitle', {
            fallback: 'From Humble Beginnings to Digital Leaders',
          })}
          text={t('0.text', {
            fallback:
              'Every company has a beginning. Our vision was to deliver reliable web solutions to businesses that needed high-performing websites. Over the years, we’ve grown into a trusted partner for companies of all sizes, continuously adapting to the ever-evolving digital landscape. Our journey has been fueled by dedication, innovation, and a relentless pursuit of excellence. Today, we’re proud to provide industry-leading web development services to businesses looking to thrive online.',
          })}
        />
        <Card
          title={t('1.title', { fallback: 'Our Mission & Vision' })}
          subtitle={t('1.subtitle', {
            fallback: 'Driving Digital Transformation',
          })}
          text={t('1.text', {
            fallback:
              'Our mission is straightforward: to empower businesses with cutting-edge web solutions that drive growth, enhance user engagement, and establish a lasting digital presence. We aim to be the leading provider of web development and hosting services that not only meet but exceed our clients’ expectations. Our vision is to shape the future of the digital world by delivering innovative, scalable, and secure solutions that help our clients succeed.',
          })}
          highlight
        />
      </div>
    </section>
  );
};

const Card = ({
  title,
  text,
  subtitle,
  highlight = false,
}: {
  title: string;
  subtitle: string;
  text: string;
  highlight?: boolean;
}) => (
  <article
    className={cn(
      'flex w-1/2 flex-col gap-10 max-lg:w-full',
      highlight && 'rounded-lg bg-[rgba(0,0,0,0.10)] p-5',
    )}
  >
    <div className="flex justify-between">
      <Title
        as="h3"
        color="black"
        className="text-[40px] leading-[120%] max-md:text-[32px] max-md:leading-[120%]"
        uppercase
      >
        {title}
      </Title>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="45"
        viewBox="0 0 32 45"
        fill="none"
      >
        <path
          d="M3.67176e-06 0.999997L26 1C27.3333 1 30 2.2 30 7C30 11.8 30 33 30 43"
          stroke="black"
        />
        <circle
          cx="30"
          cy="42.5"
          r="2"
          transform="rotate(-180 30 42.5)"
          fill="black"
        />
      </svg>
    </div>
    <div className="flex items-end gap-10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="45"
        viewBox="0 0 32 45"
        fill="none"
        className="shrink-0"
      >
        <path
          d="M32 44H6C4.66667 44 2 42.8 2 38C2 33.2 2 12 2 2"
          stroke="black"
        />
        <circle cx="2" cy="2.5" r="2" fill="black" />
      </svg>
      <div className="flex flex-col gap-2">
        <Text size="3xl" color="black" weight={500}>
          {subtitle}
        </Text>
        <Text size="xl" color="black" weight={500} className="opacity-50">
          {text}
        </Text>
      </div>
    </div>
  </article>
);
