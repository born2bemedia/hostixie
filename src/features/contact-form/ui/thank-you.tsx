'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYou = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('contactForm.thankYou');

  return (
    <section className="relative flex flex-col gap-10 px-20 py-10 max-md:px-4 max-md:pt-16">
      <Image
        className="absolute top-0 left-0 z-0 opacity-50"
        src="/images/thanks.svg"
        alt=""
        width={743}
        height={743}
        unoptimized
      />
      <div className="relative z-10 flex flex-col gap-2">
        <Title
          as="h3"
          size="5xl"
          className="max-md:text-[45px]"
          color="black"
          weight={500}
        >
          {t('title')}
        </Title>
        <Text size="xl" color="black" weight={500}>
          {t('text')}
        </Text>
      </div>
      <Button
        variant="flat"
        size="lg"
        onClick={onClose}
        className="relative z-10 ml-auto font-bold max-md:w-full max-md:justify-center"
      >
        {t('close')}
      </Button>
    </section>
  );
};
