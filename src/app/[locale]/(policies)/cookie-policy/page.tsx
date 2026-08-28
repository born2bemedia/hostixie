import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import cookieSections from '@/features/policies/data/cookie-policy.json';
import type { PolicySectionData } from '@/features/policies/types';
import { PolicyBody } from '@/features/policies/ui/policy-body';
import { PolicyHeader } from '@/features/policies/ui/policy-header';

export const metadata: Metadata = {
  title: 'Cookie Policy | Hostixie',
  description:
    'Learn how Hostixie uses cookies and similar tracking tools to improve your experience on our website.',
  openGraph: {
    title: 'Cookie Policy | Hostixie',
    description:
      'Learn how Hostixie uses cookies and similar tracking tools to improve your experience on our website.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Hostixie',
    description:
      'Learn how Hostixie uses cookies and similar tracking tools to improve your experience on our website.',
  },
  robots: {
    index: false,
  },
};

export default async function CookiePolicy() {
  const t = await getTranslations('cookiePolicy');
  const sections = cookieSections as PolicySectionData[];

  return (
    <>
      <PolicyHeader name={t('name', { fallback: 'Cookie Policy' })} />
      <PolicyBody sections={sections} sticky policyId="cookie-policy" />
    </>
  );
}
