import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { FeatureHero } from '@/shared/ui/components/feature-hero';

import {
  DownloadPrice,
  NeedHelp,
  OurFullRange,
  OurPath,
  WebPackages,
  YourPartner,
} from './components';

export default async function WebDevelopment() {
  const t = await getTranslations('webDevelopment');

  return (
    <main className="overflow-x-hidden">
      <FeatureHero
        title={t('hero.title', { fallback: 'Web Development That Delivers' })}
        subtitle={t('hero.subtitle', {
          fallback: 'Transform Your Project with Expert Web Development',
        })}
        text={t('hero.text', {
          fallback:
            'At Hostixie, we specialize in crafting custom web development solutions tailored to your unique company needs. From building a business card website to launching an e-commerce platform or developing a custom web application, we offer services designed to meet your goals and grow with your projects.',
        })}
      />
      <YourPartner />
      <OurPath />
      <OurFullRange />
      <DownloadPrice />
      <section className="relative h-[1200px] max-md:h-[800px]">
        <Image
          className="max-md:object-cover"
          src="/images/home/server.jpg"
          alt="server"
          fill
          unoptimized
        />
        <Image
          className="absolute bottom-0 left-0 h-[100px] w-full object-cover"
          src="/images/home/bottom-line-w.svg"
          alt="footer-bottom-line"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
      <WebPackages />
      <NeedHelp />
    </main>
  );
}
