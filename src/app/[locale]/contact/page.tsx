import type { Metadata } from 'next';

import { FindUsOnMap, Hero, StartConversation } from './components';

export const metadata: Metadata = {
  title: 'Contact Hostixie | Advertising & Marketing Services',
  description:
    'Get in touch with Hostixie to discuss advertising, marketing strategy, market research, PR, communications, graphic design, or a tailored business project.',
  openGraph: {
    title: 'Contact Hostixie | Advertising & Marketing Services',
    description:
      'Get in touch with Hostixie to discuss advertising, marketing strategy, market research, PR, communications, graphic design, or a tailored business project.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Hostixie | Advertising & Marketing Services',
    description:
      'Get in touch with Hostixie to discuss advertising, marketing strategy, market research, PR, communications, graphic design, or a tailored business project.',
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
