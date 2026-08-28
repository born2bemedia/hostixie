'use client';

import type { PolicySectionData } from '@/features/policies/types';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import {
  isSubtitleParagraph,
  PolicyRichText,
} from '@/features/policies/ui/policy-rich-text';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicySubtitle, PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';

const EMPHASIZED_SECTION_IDS = new Set([
  'how-we-use-personal-data',
  'legal-bases-for-processing',
]);

const normalizeBullet = (bullet: string) => bullet.replace(/^•\s*/, '');

export const PolicyBody = ({
  sections,
  sticky = false,
  policyId,
}: {
  sections: PolicySectionData[];
  sticky?: boolean;
  policyId?: string;
}) => {
  const navigation = sections.map(section => ({
    label: section.title,
    href: `#${section.id}`,
  }));

  return (
    <PolicyRender navigation={navigation} sticky={sticky}>
      {sections.map(section => (
        <PolicySection
          key={section.id}
          id={section.id}
          title={section.title}
          emphasized={EMPHASIZED_SECTION_IDS.has(section.id)}
        >
          {section.paragraphs?.map((paragraph, index) => {
            const content = (
              <PolicyRichText text={paragraph} policyId={policyId} />
            );

            if (isSubtitleParagraph(paragraph)) {
              return <PolicySubtitle key={index}>{content}</PolicySubtitle>;
            }

            return <PolicyText key={index}>{content}</PolicyText>;
          })}
          {section.bullets && (
            <List
              values={section.bullets.map((bullet, index) => (
                <PolicyRichText
                  key={index}
                  text={normalizeBullet(bullet)}
                  policyId={policyId}
                />
              ))}
              textClassName="opacity-80"
            />
          )}
        </PolicySection>
      ))}
    </PolicyRender>
  );
};
