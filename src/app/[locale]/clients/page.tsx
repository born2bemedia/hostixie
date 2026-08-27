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
  title: 'Projects That Made an Impact | Hostixie',
  description:
    'See how Hostixie helps brands solve advertising, marketing, research, communication, and visual challenges.',
  openGraph: {
    title: 'Projects That Made an Impact | Hostixie',
    description:
      'See how Hostixie helps brands solve advertising, marketing, research, communication, and visual challenges.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Projects That Made an Impact | Hostixie',
    description:
      'See how Hostixie helps brands solve advertising, marketing, research, communication, and visual challenges.',
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
