import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { getArticle } from '@/features/news/model/articles';
import { ArticleBody } from '@/features/news/ui/article-body';
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
  const articleMeta = metadata[slug];

  if (!articleMeta) {
    return {};
  }

  const { title, description } = articleMeta;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default async function NewsSlug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  return (
    <ArticleRender
      title={article.title}
      imgUrl={article.imgUrl}
      date={article.date}
      sidebar={article.sidebar}
    >
      <ArticleBody sections={article.sections} />
    </ArticleRender>
  );
}
