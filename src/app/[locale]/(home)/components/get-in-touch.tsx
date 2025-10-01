'use client';

import { useTranslations } from 'next-intl';

import { HeroTitle } from '@/shared/ui/components/hero-title';
import { Button } from '@/shared/ui/kit/button';

export const GetInTouch = () => {
  const t = useTranslations('home.getInTouch');

  return (
    <div className="bg-[#FFF4E1]">
      <section className="container">
        <HeroTitle
          color="black"
          title={t('title', { fallback: 'Get in Touch' })}
          subtitle={t('subtitle', { fallback: 'Ready to Start Your Project?' })}
          text={t('text', {
            fallback:
              'We’re here to help you bring your digital presence to life. Whether you need web hosting or a custom-built website, our team is ready to support you.',
          })}
          additionalContent={
            <Button>{t('button', { fallback: 'Let’s Make It Happen' })}</Button>
          }
        />
      </section>
    </div>
  );
};
