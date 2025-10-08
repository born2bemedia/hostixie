'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const StartBuilding = () => {
  const { openRequestForm } = useRequestForm();

  const t = useTranslations('clients.startBuilding');

  return (
    <section className="relative mt-[-1px] bg-[#FFF4E1] pt-5 pb-20">
      <div className="relative container">
        <Image
          className="absolute -bottom-44 -left-40 max-md:-top-64 max-md:-left-20"
          src="/images/clients/world.svg"
          alt="world"
          width={705}
          height={705}
          unoptimized
        />
        <ArrowTop className="absolute bottom-0 left-0 opacity-30 max-md:hidden" />
        <section className="flex items-end gap-20">
          <ArrowTop className="hidden max-md:flex" />
          <div className="ml-auto flex w-[60%] flex-col gap-10 max-md:ml-0 max-md:w-full">
            <section className="flex flex-col gap-2">
              <Title
                color="black"
                weight={500}
                className="text-[45px] max-md:text-[20px]"
              >
                {t('title', { fallback: 'Start Building With Us' })}
              </Title>
              <Text
                size="xl"
                color="black"
                weight={500}
                className="leading-[120%] tracking-[-0.48px] opacity-30"
              >
                {t('text', {
                  fallback:
                    "Whether you're starting from scratch or need to rebuild, we’re",
                })}
              </Text>
            </section>
            <Button variant="primary" onClick={openRequestForm}>
              {t('button', { fallback: 'Request a Free Consultation' })}
            </Button>
          </div>
        </section>
      </div>
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
