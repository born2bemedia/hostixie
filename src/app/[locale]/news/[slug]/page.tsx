import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';

import { getArticle } from '@/features/news/model/articles';
import { ArticleRender } from '@/features/news/ui/article-render';

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
