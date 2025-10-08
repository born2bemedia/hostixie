'use client';

import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const GotProject = () => {
  const t = useTranslations('news.gotProject');

  return (
    <section className="bg-[#FFF4E1] pt-5 pb-20">
      <section className="container flex items-end gap-20">
        <ArrowTop className="opacity-30" />
        <div className="ml-auto flex w-[60%] flex-col gap-10 max-md:ml-0 max-md:w-full">
          <section className="flex flex-col gap-2">
            <Title
              color="black"
              weight={500}
              className="text-[45px] max-md:text-[20px]"
            >
              {t('title', { fallback: 'Got a Project or Idea?' })}
            </Title>
            <Text
              size="xl"
              color="black"
              weight={500}
              className="leading-[120%] tracking-[-0.48px] opacity-30"
            >
              {t('text', {
                fallback:
                  'Let’s turn it into something amazing. Click below, and let’s talk timelines, goals, and possibilities.',
              })}
            </Text>
          </section>
          <Link href="/contact">
            <Button variant="primary">
              {t('button', { fallback: 'Contact Our Team' })}
            </Button>
          </Link>
        </div>
      </section>
    </section>
  );
};

const ArrowTop = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className={className}
  >
    <path
      d="M32 44.25H6C4.66667 44.25 2 43.05 2 38.25C2 33.45 2 12.25 2 2.25"
      stroke="black"
    />
    <circle cx="2" cy="2.75" r="2" fill="black" />
  </svg>
);
