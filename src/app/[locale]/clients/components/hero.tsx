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
      textFirst
      title={
        <>
          {t('title.0')} <br />
          <span className="text-primary">{t('title.1')}</span>
        </>
      }
      subtitle={t('subtitle')}
      layoutClassName="h-[700px] max-[1295px]:h-[880px] max-md:h-[680px]"
      innerClassName="pb-[132px] max-md:pb-[150px]"
      containerClassName="flex-1 min-h-0"
      contentRowClassName="mt-auto"
      contentColumnClassName="pb-10 max-md:pb-8"
      text={t('text')}
      additionalContent={
        <Button variant="primary" onClick={openRequestForm}>
          {t('button')}
        </Button>
      }
    />
  );
};
