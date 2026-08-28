import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import refundSections from '@/features/policies/data/refund-policy.json';
import type { PolicySectionData } from '@/features/policies/types';
import { PolicyBody } from '@/features/policies/ui/policy-body';
import { PolicyHeader } from '@/features/policies/ui/policy-header';

export const metadata: Metadata = {
  title: 'Refund Policy | Hostixie',
  description:
    'Learn about Hostixie refund policy for our advertising and marketing services.',
  openGraph: {
    title: 'Refund Policy | Hostixie',
    description:
      'Learn about Hostixie refund policy for our advertising and marketing services.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Refund Policy | Hostixie',
    description:
      'Learn about Hostixie refund policy for our advertising and marketing services.',
  },
  robots: {
    index: false,
  },
};

export default async function RefundPolicy() {
  const t = await getTranslations('refundPolicy');
  const sections = refundSections as PolicySectionData[];

  return (
    <>
      <PolicyHeader
        name={t('title', { fallback: 'Refund Policy' })}
        subtitle="Last Updated: August 28, 2026"
      />
      <PolicyBody sections={sections} />
    </>
  );
}
