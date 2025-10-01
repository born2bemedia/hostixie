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
        'New Hosting Features Launched – Faster Speeds & Improved Reliability',
    }),
    text: t('news.0.text', {
      fallback:
        'We’ve rolled out new hosting features that guarantee faster page load times, enhanced server reliability, and a smoother overall experience for your website visitors.',
    }),
    href: '/',
    imgUrl: '/images/home/news-1.jpg',
  },
  {
    title: t('news.1.title', {
      fallback:
        'Introducing Our New Web Development Framework – Built for Performance',
    }),
    text: t('news.1.text', {
      fallback:
        'Our latest framework is optimized to create faster, more secure websites, ensuring improved performance, scalability, and better user experiences.',
    }),
    href: '/',
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
            fallback: 'Stay Updated with the Latest from Hostixie',
          })}
          text={t('text', {
            fallback:
              'We believe in sharing valuable insights and updates with our clients. Our blog covers a wide range of topics, from web development trends to best practices for hosting solutions.',
          })}
        />
        <section className="flex gap-8 max-md:flex-col max-md:gap-10">
          {news.map(news => (
            <Card key={news.title} {...news} />
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
          <Button variant="ghost">
            {t('readMore', { fallback: 'Read More' })}
          </Button>
        </Link>
      </section>
    </article>
  );
};
