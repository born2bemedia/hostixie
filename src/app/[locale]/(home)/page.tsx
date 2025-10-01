import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

import {
  Clients,
  Hero,
  InsightsAndNews,
  OurApproach,
  WhatWeDo,
  WhoWeAre,
} from './components';

export default async function Home() {
  const t = await getTranslations('home.getInTouch');

  return (
    <main className="overflow-x-hidden">
      <Hero />
      <WhatWeDo />
      <OurApproach />
      <section className="relative mt-[180px] mb-[72px] h-[1200px] max-md:h-[800px]">
        <Image
          className="max-md:object-cover"
          src="/images/home/server.jpg"
          alt="server"
          fill
          unoptimized
        />
        <Image
          className="absolute bottom-0 left-0 h-[100px] w-full object-cover"
          src="/images/home/bottom-line.svg"
          alt="footer-bottom-line"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
      <Clients />
      <WhoWeAre />
      <section className="relative mt-[175px] h-[1200px] max-md:h-[800px]">
        <Image
          className="max-md:object-cover"
          src="/images/home/networks.jpg"
          alt="server"
          fill
          unoptimized
        />
        <Image
          className="absolute right-0 bottom-0 h-[100px] w-full object-cover"
          src="/images/home/bottom-line-w.svg"
          alt="footer-bottom-line"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
      <InsightsAndNews />
      <GetInTouch
        title={t('title', { fallback: 'Get in Touch' })}
        subtitle={t('subtitle', { fallback: 'Ready to Start Your Project?' })}
        text={t('text', {
          fallback:
            'We’re here to help you bring your digital presence to life. Whether you need web hosting or a custom-built website, our team is ready to support you.',
        })}
        button={t('button', { fallback: 'Let’s Make It Happen' })}
      />
    </main>
  );
}
