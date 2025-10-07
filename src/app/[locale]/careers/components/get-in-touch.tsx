'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const GetInTouch = () => {
  const t = useTranslations('careers.getInTouch');

  return (
    <section className="relative mt-[-1px] bg-[#FFF4E1] pt-5 pb-20 max-md:py-20">
      <div className="container flex items-end gap-10">
        <ArrowIcon className="bottom-0 left-0 hidden max-md:relative max-md:block" />
        <div className="ml-auto flex w-[65%] flex-col gap-10 max-md:ml-0 max-md:w-full">
          <section className="flex flex-col gap-2">
            <Title
              color="black"
              weight={500}
              className="text-[45px] max-md:text-lg"
            >
              {t('title', { fallback: 'Get in Touch with Hostixie' })}
            </Title>
            <Text size="xl" color="black" weight={500} className="opacity-30">
              {t('text', {
                fallback:
                  "Even if you're not ready to apply but want to connect, we’d love to hear from you. Have an idea, a skillset, or a question? Let’s start a conversation.",
              })}
            </Text>
          </section>
          <Link href="/contact">
            <Button variant="primary">
              {t('button', { fallback: 'Email us' })}
            </Button>
          </Link>
        </div>
      </div>
      <Image
        className="absolute -bottom-40 left-0 object-cover max-md:-top-40 max-md:-left-14"
        src="/images/careers/world.svg"
        alt="world"
        width={750}
        height={750}
        unoptimized
      />
      <ArrowIcon className="max-md:hidden" />
    </section>
  );
};

const ArrowIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className={cn(
      'absolute -bottom-2 left-[10%] shrink-0 opacity-20',
      className,
    )}
  >
    <path
      d="M32 44.25H6C4.66667 44.25 2 43.05 2 38.25C2 33.45 2 12.25 2 2.25"
      stroke="black"
    />
    <circle cx="2" cy="2.75" r="2" fill="black" />
  </svg>
);
