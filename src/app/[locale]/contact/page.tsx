import type { Metadata } from 'next';

import { Hero, StartConversation } from './components';

export const metadata: Metadata = {
  title: 'Contact Hostixie – Hosting & Web Development Support | Hostixie',
  description:
    'Get in touch with Hostixie. Contact our team for hosting plans, web development, and professional support.',
  openGraph: {
    title: 'Contact Hostixie – Hosting & Web Development Support | Hostixie',
    description:
      'Get in touch with Hostixie. Contact our team for hosting plans, web development, and professional support.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hostixie – Hosting & Web Development Support | Hostixie',
    description:
      'Get in touch with Hostixie. Contact our team for hosting plans, web development, and professional support.',
  },
};

export default function Contact() {
  return (
    <main>
      <Hero />
      <StartConversation />
    </main>
  );
}
