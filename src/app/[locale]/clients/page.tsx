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
  title: 'Our Clients & Marketing Projects | Hostixie',
  description:
    'Explore selected Hostixie projects across advertising, marketing strategy, market research, communications, PR, and creative services.',
  openGraph: {
    title: 'Our Clients & Marketing Projects | Hostixie',
    description:
      'Explore selected Hostixie projects across advertising, marketing strategy, market research, communications, PR, and creative services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Clients & Marketing Projects | Hostixie',
    description:
      'Explore selected Hostixie projects across advertising, marketing strategy, market research, communications, PR, and creative services.',
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
