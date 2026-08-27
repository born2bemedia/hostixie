'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { HeroTitle } from '@/shared/ui/components/hero-title';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';

const getNews = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('news.0.title', {
      fallback:
        'Why Audience Insight Should Come Before the Campaign Idea',
    }),
    text: t('news.0.text', {
      fallback:
        'We explore how audience research can uncover motivations, preferences, and behaviors that shape stronger campaign decisions.',
    }),
    href: '/news',
    imgUrl: '/images/home/news-1.jpg',
  },
  {
    title: t('news.1.title', {
      fallback:
        'Building Consistent Brand Communication Across Multiple Channels',
    }),
    text: t('news.1.text', {
      fallback:
        'We look at why consistent messaging and visual communication matter across every customer touchpoint.',
    }),
    href: '/news',
    imgUrl: '/images/home/news-2.jpg',
  },
];

export const InsightsAndNews = () => {
  const t = useTranslations('home.insightsAndNews');

  const news = getNews(t);

  return (
    <div className="bg-[#FFF4E1]">
      <section className="container flex flex-col gap-10 py-10">
        <HeroTitle
          color="black"
          title={t('title', { fallback: 'Insights & News' })}
          subtitle={t('subtitle', {
            fallback: 'Ideas, Research & Perspectives from Hostixie',
          })}
          text={t('text', {
            fallback:
              'Our News section explores advertising trends, audience behavior, media strategy, market research, public relations, brand communication, graphic design, and other developments that shape how businesses connect with people.',
          })}
        />
        <section className="flex gap-8 max-md:flex-col max-md:gap-10">
          {news.map(item => (
            <Card key={item.title} {...item} />
          ))}
        </section>
      </section>
    </div>
  );
};

const Card = ({
  href,
  imgUrl,
  text,
  title,
}: {
  imgUrl: string;
  title: string;
  text: string;
  href: string;
}) => {
  const t = useTranslations('home.insightsAndNews');

  return (
    <article className="flex w-1/2 flex-col gap-4 max-md:w-full">
      <div className="rounded-xl border border-[#A4A189] p-4">
        <Image
          className="h-[184px] w-full object-cover"
          src={imgUrl}
          alt={title}
          width={668}
          height={184}
          unoptimized
        />
      </div>
      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1.5">
          <Text size="lg" weight={700} color="black">
            {title}
          </Text>
          <Text size="lg" color="sand">
            {text}
          </Text>
        </div>
        <Link href={href}>
          <Button
            variant="ghost"
            className="border-background-color h-10.5 border px-6 text-[15px] font-bold tracking-[0.16px]"
          >
            {t('readMore', { fallback: 'Read More' })}
          </Button>
        </Link>
      </section>
    </article>
  );
};
