'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYou = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('applicationForm.thankYou');

  return (
    <section className="relative flex flex-col gap-10 px-20 pt-[100px] pb-10 max-md:px-4">
      <Image
        className="absolute top-0 left-0 z-0 opacity-50"
        src="/images/thanks.svg"
        alt="thanks"
        width={743}
        height={743}
        unoptimized
      />
      <div className="flex flex-col gap-2">
        <Title
          as="h3"
          size="5xl"
          className="max-md:text-[45px]"
          color="black"
          weight={500}
        >
          {t('title', { fallback: 'Thank you!' })}
        </Title>
        <Text size="xl" color="black" weight={400}>
          {t('text', {
            fallback:
              'Your application has been successfully received. Our team is reviewing the details and will contact you shortly to discuss the next steps.',
          })}
        </Text>
      </div>
      <Button
        variant="flat"
        size="lg"
        onClick={onClose}
        className="ml-auto max-md:w-full max-md:justify-center"
      >
        {t('close', { fallback: 'Close' })}
      </Button>
    </section>
  );
};
