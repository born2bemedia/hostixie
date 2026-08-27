'use client';

import { useTranslations } from 'next-intl';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const DownloadPrice = () => {
  const t = useTranslations('webDevelopment.downloadPrice');

  return (
    <section>
      <GetInTouch
        color="white"
        title={t('title')}
        text={t('text')}
        button={t('button')}
        titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
        layoutClassName="bg-black py-[100px] max-md:py-16"
      />
    </section>
  );
};
