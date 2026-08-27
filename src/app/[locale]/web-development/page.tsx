import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { FeatureHero } from '@/shared/ui/components/feature-hero';

import {
  DownloadPrice,
  NeedHelp,
  OurFullRange,
  OurPath,
  WebPackages,
} from './components';

export const metadata: Metadata = {
  title:
    'Marketing & Communications – Strategy, Research, PR & Design | Hostixie',
  description:
    'Hostixie marketing and communications services cover consulting, market research, PR, brand communication, and visual solutions built around your business goals.',
  openGraph: {
    title:
      'Marketing & Communications – Strategy, Research, PR & Design | Hostixie',
    description:
      'Hostixie marketing and communications services cover consulting, market research, PR, brand communication, and visual solutions built around your business goals.',
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Marketing & Communications – Strategy, Research, PR & Design | Hostixie',
    description:
      'Hostixie marketing and communications services cover consulting, market research, PR, brand communication, and visual solutions built around your business goals.',
  },
};

export default async function WebDevelopment() {
  const t = await getTranslations('webDevelopment');

  return (
    <main className="overflow-x-hidden">
      <FeatureHero
        title={t('hero.title')}
        subtitle={t('hero.subtitle')}
        text={t('hero.text')}
      />
      <OurPath />
      <OurFullRange />
      <DownloadPrice />
      <section className="relative h-[1200px] max-md:h-[800px]">
        <Image
          className="object-cover"
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
