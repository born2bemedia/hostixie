import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import privacySections from '@/features/policies/data/privacy-policy.json';
import type { PolicySectionData } from '@/features/policies/types';
import { PolicyBody } from '@/features/policies/ui/policy-body';
import { PolicyHeader } from '@/features/policies/ui/policy-header';

export const metadata: Metadata = {
  title: 'Privacy Policy | Hostixie',
  description:
    'Learn how Hostixie collects, uses, and protects your personal information.',
  openGraph: {
    title: 'Privacy Policy | Hostixie',
    description:
      'Learn how Hostixie collects, uses, and protects your personal information.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | Hostixie',
    description:
      'Learn how Hostixie collects, uses, and protects your personal information.',
  },
  robots: {
    index: false,
  },
};

export default async function PrivacyPolicy() {
  const t = await getTranslations('privacyPolicy');
  const sections = privacySections as PolicySectionData[];

  return (
    <>
      <PolicyHeader name={t('title', { fallback: 'Privacy Policy' })} />
      <PolicyBody sections={sections} policyId="privacy-policy" />
    </>
  );
}
