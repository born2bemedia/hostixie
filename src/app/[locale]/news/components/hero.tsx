'use client';

import { useTranslations } from 'next-intl';

import { PageHero } from '@/shared/ui/components/page-hero';
import { Chip } from '@/shared/ui/kit/chip';

export const Hero = () => {
  const t = useTranslations('news.hero');

  return (
    <PageHero
      title={
        <>
          {t('title.0')} <br />
          <span className="text-primary">{t('title.1')}</span>
        </>
      }
      subtitle={t('subtitle')}
      layoutClassName="h-[680px] max-[1295px]:h-[820px] max-md:h-[620px]"
      text={t('text')}
      additionalContent={
        <div className="flex items-center gap-2 max-md:flex-col">
          <Chip>{t('chips.0')}</Chip>
          <Chip>{t('chips.1')}</Chip>
          <Chip>{t('chips.2')}</Chip>
        </div>
      }
    />
  );
};
