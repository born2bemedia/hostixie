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
      layoutClassName="h-[620px] max-[1295px]:h-[820px] max-md:h-[620px]"
      text={t('text')}
      additionalContent={
        <Button variant="primary" onClick={openRequestForm}>
          {t('button')}
        </Button>
      }
    />
  );
};
