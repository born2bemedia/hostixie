import Image from 'next/image';
import { getTranslations } from 'next-intl/server';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import { getTechNews } from '../model/previews';
import type { Article } from '../model/types';
import { NewsList } from './news-list';

export const ArticleRender = async ({
  title,
  imgUrl,
  date,
  description,
  children,
}: Article) => {
  const t = await getTranslations('articles');
  const translationsTechNews = await getTranslations('news');

  const techNews = getTechNews(translationsTechNews);

  return (
    <article className="flex flex-col">
      <header className="container flex flex-col gap-5 py-10 max-md:gap-10 max-md:py-20">
        <BackBtn />
        <Title
          as="h1"
          className="text-[60px] leading-[120%] max-md:text-[40px] max-md:leading-[90%] max-md:tracking-[1.12px]"
          uppercase
        >
          {title}
        </Title>
      </header>
      <main className="bg-[#fff4e1] py-[60px] max-md:px-4">
        <div className="container flex gap-20 rounded-xl border border-[#A4A189] p-6 max-md:flex-col">
          <section className="sticky top-4 flex max-w-[450px] flex-col gap-5 self-start max-md:relative max-md:top-0 max-md:max-w-full">
            <Image
              className="h-[300px] w-full rounded-2xl object-cover"
              src={imgUrl}
              alt={title}
              width={382}
              height={300}
              unoptimized
            />
            <div className="flex flex-col gap-2">
              <Text size="xs" color="primary" weight={700}>
                {date}
              </Text>
              <Text size="xl" color="black" weight={500} className="opacity-80">
                {description}
              </Text>
            </div>
          </section>
          <main className="flex flex-col gap-5">{children}</main>
        </div>
      </main>
      <footer className="mt-[-1px] bg-[#fff4e1] py-[60px] max-md:pt-0 max-md:pb-10">
        <NewsList
          heading={t('heading', { fallback: 'More Tech & Team Updates' })}
          items={techNews}
        />
      </footer>
    </article>
  );
};

const BackBtn = () => (
  <Link href="/news">
    <Button variant="outline">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <g clipPath="url(#clip0_254_11329)">
          <path
            d="M9 2.2168L2.80574 8.41105L2.80574 9.59899L9 15.7932"
            stroke="#FFF4E1"
            strokeWidth="2.4"
          />
          <path
            d="M2.21177 9.00502H15.7882"
            stroke="#FFF4E1"
            strokeWidth="2.4"
          />
        </g>
        <defs>
          <clipPath id="clip0_254_11329">
            <rect
              width="12"
              height="12"
              fill="white"
              transform="matrix(-0.707107 0.707107 0.707107 0.707107 9 0.519531)"
            />
          </clipPath>
        </defs>
      </svg>
    </Button>
  </Link>
);
