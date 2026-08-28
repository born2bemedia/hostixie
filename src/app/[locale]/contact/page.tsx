import type { Metadata } from 'next';

import { FindUsOnMap, Hero, StartConversation } from './components';

export const metadata: Metadata = {
  title: 'Contact Hostixie – Advertising & Marketing Support | Hostixie',
  description:
    'Get in touch with Hostixie. Contact our team for advertising, marketing, communications, research, and creative services.',
  openGraph: {
    title: 'Contact Hostixie – Advertising & Marketing Support | Hostixie',
    description:
      'Get in touch with Hostixie. Contact our team for advertising, marketing, communications, research, and creative services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hostixie – Advertising & Marketing Support | Hostixie',
    description:
      'Get in touch with Hostixie. Contact our team for advertising, marketing, communications, research, and creative services.',
  },
};

export default function Contact() {
  return (
    <main>
      <Hero />
      <FindUsOnMap />
      <StartConversation />
    </main>
  );
}
