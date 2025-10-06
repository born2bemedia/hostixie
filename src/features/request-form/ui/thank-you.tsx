'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const ThankYou = ({ onClose }: { onClose: () => void }) => {
  const t = useTranslations('requestForm.thankYou');

  return (
    <section className="relative flex flex-col gap-10 px-20 pt-20">
      <Image
        className="absolute top-0 left-0 z-0 opacity-50"
        src="/images/thanks.svg"
        alt="thanks"
        width={643}
        height={643}
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
          {t('title.0', { fallback: 'We’re Excited to' })}{' '}
          <span className="text-primary">
            {t('title.1', { fallback: 'Connect!' })}
          </span>
        </Title>
        <Text size="xl" color="black" weight={400}>
          {t('text', {
            fallback:
              'We appreciate you taking the time to share your details with us. We’re excited to work together and start the journey toward achieving your digital goals. One of our team members will be in touch with you shortly.',
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
