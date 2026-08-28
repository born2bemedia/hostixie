'use client';

import { List } from '@/shared/ui/kit/list';

import type { ArticleSectionData } from '../types';
import { ArticleSection } from './article-section';
import { ArticleText } from './article-text';

export const ArticleBody = ({ sections }: { sections: ArticleSectionData[] }) =>
  sections.map(section => (
    <ArticleSection key={section.title} title={section.title}>
      {section.paragraphs?.map((paragraph, index) => (
        <ArticleText key={index}>{paragraph}</ArticleText>
      ))}
      {section.bullets && (
        <List
          values={section.bullets}
          textClassName="opacity-80"
        />
      )}
    </ArticleSection>
  ));
