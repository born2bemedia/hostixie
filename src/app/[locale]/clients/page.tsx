import type { Metadata } from 'next';

import {
  ClientResults,
  ClientReviews,
  ClientsOften,
  Experience,
  Hero,
  OurProcess,
  StartBuilding,
  WhatProjectsWork,
} from './components';

export const metadata: Metadata = {
  title: 'Hostixie Projects & Success Stories | Hostixie',
  description:
    'See how Hostixie helps clients achieve success with custom websites, hosting, and e-commerce platforms.',
  openGraph: {
    title: 'Hostixie Projects & Success Stories | Hostixie',
    description:
      'See how Hostixie helps clients achieve success with custom websites, hosting, and e-commerce platforms.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hostixie Projects & Success Stories | Hostixie',
    description:
      'See how Hostixie helps clients achieve success with custom websites, hosting, and e-commerce platforms.',
  },
};

export default function Clients() {
  return (
    <main>
      <Hero />
      <WhatProjectsWork />
      <ClientResults />
      <ClientReviews />
      <ClientsOften />
      <OurProcess />
      <Experience />
      <StartBuilding />
    </main>
  );
}
