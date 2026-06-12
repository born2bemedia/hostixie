import type { Metadata } from 'next';
import Image from 'next/image';

import {
  Clients,
  Hero,
  InsightsAndNews,
  MakeItHappen,
  OurApproach,
  WhatWeDo,
  WhoWeAre,
} from './components';

export const metadata: Metadata = {
  title: 'Web Hosting & Web Development Services | Hostixie',
  description:
    'Hostixie offers fast, secure hosting and professional web development. Fast hosting, custom websites, online stores, and web solutions built around your goals.',
  openGraph: {
    title: 'Web Hosting & Web Development Services | Hostixie',
    description:
      'Hostixie offers fast, secure hosting and professional web development. Fast hosting, custom websites, online stores, and web solutions built around your goals.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Hosting & Web Development Services | Hostixie',
    description:
      'Hostixie offers fast, secure hosting and professional web development. Fast hosting, custom websites, online stores, and web solutions built around your goals.',
  },
};

export default function Home() {
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
      <MakeItHappen />
    </main>
  );
}
