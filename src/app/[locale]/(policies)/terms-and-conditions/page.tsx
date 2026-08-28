import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import termsSections from '@/features/policies/data/terms-and-conditions.json';
import type { PolicySectionData } from '@/features/policies/types';
import { PolicyBody } from '@/features/policies/ui/policy-body';
import { PolicyHeader } from '@/features/policies/ui/policy-header';

export const metadata: Metadata = {
  title: 'Terms and Conditions | Hostixie',
  description:
    'Learn how Hostixie handles terms and conditions for our services.',
  openGraph: {
    title: 'Terms and Conditions | Hostixie',
    description:
      'Learn how Hostixie handles terms and conditions for our services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms and Conditions | Hostixie',
    description:
      'Learn how Hostixie handles terms and conditions for our services.',
  },
  robots: {
    index: false,
  },
};

export default async function TermsAndConditions() {
  const t = await getTranslations('termsAndConditions');
  const sections = termsSections as PolicySectionData[];

  return (
    <>
      <PolicyHeader
        name={t('title', { fallback: 'Terms and Conditions' })}
      />
      <PolicyBody sections={sections} policyId="terms-and-conditions" />
    </>
  );
}
