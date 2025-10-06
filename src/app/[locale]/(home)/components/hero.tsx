'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('home.hero');

  const { openRequestForm } = useRequestForm();

  return (
    <section className="relative flex h-[800px] flex-col">
      <section className="container flex items-end pt-[170px] max-md:flex-col max-md:items-start max-md:gap-10 max-md:pt-[48px]">
        <div className="z-10 flex flex-col gap-2.5">
          <Title as="h1" uppercase>
            {t('title', {
              fallback: 'Empowering Your Project’s Digital Presence',
            })}
          </Title>
          <Text>
            {t('subtitle', {
              fallback:
                'Fast, Secure, and Scalable Hosting & Custom Web Development Solutions to Help Your Business Thrive Online',
            })}
          </Text>
        </div>
        <Button
          variant="secondary"
          className="z-10 shrink-0"
          onClick={openRequestForm}
        >
          {t('button', {
            fallback: 'Start Your Journey Today',
          })}
        </Button>
      </section>
      <Image src="/images/home/hero.jpg" alt="hero" fill unoptimized />
      <Image
        className="absolute bottom-0 left-0 h-[134px] w-full object-cover"
        src="/images/home/bottom-line.svg"
        alt="hero-bottom"
        width={1440}
        height={134}
        unoptimized
      />
    </section>
  );
};
