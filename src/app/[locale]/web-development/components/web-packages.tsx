'use client';

import { useTranslations } from 'next-intl';

import type { WebDevPackage } from '@/features/web-development/model/types';
import { WebDevelopmentCard } from '@/features/web-development/ui/web-development-card';

import { Heading } from '@/shared/ui/components/heading';

const PACKAGE_IMAGES = [
  '/images/web-dev/pack-1.png',
  '/images/web-dev/pack-2.png',
  '/images/web-dev/pack-3.png',
  '/images/web-dev/pack-4.png',
  '/images/web-dev/pack-1.png',
] as const;

const getPackages = (
  t: ReturnType<typeof useTranslations>,
): WebDevPackage[] =>
  PACKAGE_IMAGES.map((imgUrl, index) => {
    const key = String(index);
    const includes: string[] = [];
    for (let i = 0; i < 10; i++) {
      const includeKey = `items.${key}.includes.${i}`;
      if (!t.has(includeKey)) break;
      includes.push(t(includeKey));
    }

    return {
      title: t(`items.${key}.title`),
      description: t(`items.${key}.description`),
      price: t(`items.${key}.price`),
      includes,
      imgUrl,
    };
  });

export const WebPackages = () => {
  const t = useTranslations('webDevelopment.webPackages');
  const packages = getPackages(t);

  return (
    <section className="bg-[#FFF4E1] py-10">
      <div className="container flex flex-col gap-10">
        <Heading color="black" title={t('title')} text={t('text')} />
        <section className="flex flex-col gap-5">
          <div className="flex gap-5 max-md:flex-col max-md:items-start">
            {packages.slice(0, 2).map(p => (
              <WebDevelopmentCard key={p.title} {...p} />
            ))}
          </div>
          <div className="flex gap-5 max-md:flex-col max-md:items-start">
            {packages.slice(2, 4).map(p => (
              <WebDevelopmentCard key={p.title} {...p} />
            ))}
          </div>
          <div className="flex gap-5 max-md:flex-col max-md:items-start">
            {packages.slice(4).map(p => (
              <WebDevelopmentCard key={p.title} {...p} fullWidth />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
