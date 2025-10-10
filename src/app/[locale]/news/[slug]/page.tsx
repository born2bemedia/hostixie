import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { getArticle } from '@/features/news/model/articles';
import { ArticleRender } from '@/features/news/ui/article-render';

import { metadata } from './meta';

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    slug: string;
  }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { title, description } = metadata[slug];

  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
    },
  };
}

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const t = await getTranslations('articles');

  const article = getArticle(slug, t);

  if (!article) {
    notFound();
  }

  return (
    <ArticleRender
      title={article.title}
      imgUrl={article.imgUrl}
      date={article.date}
      description={article.description}
    >
      {article.children}
    </ArticleRender>
  );
}
