'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { PageHero } from '@/shared/ui/components/page-hero';
import { Button } from '@/shared/ui/kit/button';

export const Hero = () => {
  const { openRequestForm } = useRequestForm();

  const t = useTranslations('clients.hero');

  return (
    <PageHero
      title={
        <>
          {t('title.0', { fallback: 'Projects That' })} <br />
          <span className="text-primary">
            {t('title.1', { fallback: 'Made an Impact' })}
          </span>
        </>
      }
      subtitle={t('subtitle', { fallback: 'Got a vision for something?' })}
      layoutClassName="h-[620px] max-[1295px]:h-[820px] max-md:h-[620px]"
      text={t('text', {
        fallback:
          'Every result is a collaboration. We’ve helped businesses, creators, and professionals launch platforms that are fast, functional, and built for growth.',
      })}
      additionalContent={
        <Button variant="primary" onClick={openRequestForm}>
          {t('button', { fallback: "Let's Talk" })}
        </Button>
      }
    />
  );
};
