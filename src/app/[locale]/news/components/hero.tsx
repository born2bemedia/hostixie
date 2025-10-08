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
          {t('title.0', { fallback: 'Hostixie' })} <br />
          <span className="text-primary">
            {t('title.1', { fallback: 'Newsroom' })}
          </span>
        </>
      }
      subtitle={t('subtitle', {
        fallback: 'Transform Your Project with Expert Web Development',
      })}
      layoutClassName="h-[680px] max-[1295px]:h-[820px] max-md:h-[620px]"
      text={t('text', {
        fallback:
          'Explore our new launches, platform upgrades, creative wins, and behind-the-scenes progress.',
      })}
      additionalContent={
        <div className="flex items-center gap-2 max-md:flex-col">
          <Chip>{t('chips.0', { fallback: '#Latest Wins & Launches' })}</Chip>
          <Chip>{t('chips.1', { fallback: '#Tech & Team Updates' })}</Chip>
          <Chip>{t('chips.2', { fallback: '#Partnerships & People' })}</Chip>
        </div>
      }
    />
  );
};
