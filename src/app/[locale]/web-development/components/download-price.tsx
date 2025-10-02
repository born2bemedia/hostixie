'use client';

import { useTranslations } from 'next-intl';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const DownloadPrice = () => {
  const t = useTranslations('webDevelopment.downloadPrice');

  return (
    <section>
      <GetInTouch
        color="white"
        title={t('title', {
          fallback: 'Need Our Pricing in PDF?',
        })}
        text={t('text', {
          fallback:
            'While all our prices are available on the website, we understand you might prefer a convenient, downloadable version. Get our complete pricing details in PDF format, neatly organized for easy reference and comparison.',
        })}
        button={t('button', {
          fallback: 'Download Full Pricing PDF',
        })}
        titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
        layoutClassName="bg-black py-20"
      />
    </section>
  );
};
