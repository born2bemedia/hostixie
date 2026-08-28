'use client';

import { Link } from '@/i18n/navigation';

const LINK_PATTERN =
  /(info@hostixie\.com|https:\/\/hostixie\.com\/en\/contact|Cookie Policy[.;]?|Privacy Policy[.;]?)/g;

export const PolicyRichText = ({ text }: { text: string }) => {
  const parts = text.split(LINK_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (part === 'info@hostixie.com') {
          return (
            <Link
              key={index}
              href="mailto:info@hostixie.com"
              className="text-primary font-bold"
            >
              info@hostixie.com
            </Link>
          );
        }

        if (part === 'https://hostixie.com/en/contact') {
          return (
            <Link key={index} href="/contact" className="text-primary font-bold">
              https://hostixie.com/en/contact
            </Link>
          );
        }

        if (part.startsWith('Cookie Policy')) {
          const suffix = part.slice('Cookie Policy'.length);

          return (
            <span key={index}>
              <Link href="/cookie-policy" className="text-primary font-bold">
                Cookie Policy
              </Link>
              {suffix}
            </span>
          );
        }

        if (part.startsWith('Privacy Policy')) {
          const suffix = part.slice('Privacy Policy'.length);

          return (
            <span key={index}>
              <Link href="/privacy-policy" className="text-primary font-bold">
                Privacy Policy
              </Link>
              {suffix}
            </span>
          );
        }

        return part;
      })}
    </>
  );
};
