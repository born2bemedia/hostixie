import articlesData from '@/features/news/data/articles.json';
import type { ArticleData } from '@/features/news/types';

const articles = articlesData as ArticleData[];

export const getArticle = (slug: string): ArticleData | undefined =>
  articles.find(article => article.slug === slug);

export const getAllArticleSlugs = (): string[] =>
  articles.map(article => article.slug);
