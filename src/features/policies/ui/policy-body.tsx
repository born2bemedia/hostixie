'use client';

import type { PolicySectionData } from '@/features/policies/types';
import { PolicyRender } from '@/features/policies/ui/policy-render';
import { PolicyRichText } from '@/features/policies/ui/policy-rich-text';
import { PolicySection } from '@/features/policies/ui/policy-section';
import { PolicyText } from '@/features/policies/ui/policy-text';

import { List } from '@/shared/ui/kit/list';

const normalizeBullet = (bullet: string) => bullet.replace(/^•\s*/, '');

export const PolicyBody = ({
  sections,
  sticky = false,
}: {
  sections: PolicySectionData[];
  sticky?: boolean;
}) => {
  const navigation = sections.map(section => ({
    label: section.title,
    href: `#${section.id}`,
  }));

  return (
    <PolicyRender navigation={navigation} sticky={sticky}>
      {sections.map(section => (
        <PolicySection key={section.id} id={section.id} title={section.title}>
          {section.paragraphs?.map((paragraph, index) => (
            <PolicyText key={index}>
              <PolicyRichText text={paragraph} />
            </PolicyText>
          ))}
          {section.bullets && (
            <List
              values={section.bullets.map((bullet, index) => (
                <PolicyRichText
                  key={index}
                  text={normalizeBullet(bullet)}
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
