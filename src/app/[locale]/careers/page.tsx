import { getTranslations } from 'next-intl/server';

import { PageHero } from '@/shared/ui/components/page-hero';

import { GetInTouch, Jobs, OurCulture, WhyJoinUs } from './components';

export default async function Careers() {
  const t = await getTranslations('careers.hero');

  return (
    <main>
      <PageHero
        title={
          <>
            <span className="text-[40px] leading-[48px] max-md:text-base max-md:leading-[120%]">
              {t('title.0', { fallback: 'Careers:' })}
            </span>{' '}
            <br /> {t('title.1', { fallback: 'Be the First' })} <br />
            <span className="text-primary">
              {t('title.2', { fallback: 'to Apply' })}
            </span>
          </>
        }
        subtitle={t('subtitle', {
          fallback: 'Awaken Your Website’s Potential with Hostixie',
        })}
        text={t('text', {
          fallback:
            "At Hostixie, we believe your work should empower your life. Whether you're building platforms, writing code, supporting clients, or managing operations — your ideas shape how we grow. Join us and create something meaningful, with room to explore, build, and lead.",
        })}
      />
      <WhyJoinUs />
      <Jobs />
      <OurCulture />
      <GetInTouch />
    </main>
  );
}
