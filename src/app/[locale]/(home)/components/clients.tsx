'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { HeroTitle } from '@/shared/ui/components/hero-title';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { VerticalSlider } from '@/shared/ui/components/vertical-slider';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Text } from '@/shared/ui/kit/text';

const ARTICLE_IMAGES = [
  '/images/home/clients-1.jpg',
  '/images/home/clients-2.jpg',
  '/images/home/clients-3.jpg',
  '/images/home/clients-4.jpg',
] as const;

const getArticles = (t: ReturnType<typeof useTranslations>) =>
  ARTICLE_IMAGES.map((imgUrl, index) => ({
    title: t(`articles.${index}.title`),
    text: t(`articles.${index}.text`),
    href: '/clients',
    imgUrl,
  }));

const getReviews = (t: ReturnType<typeof useTranslations>) => [
  {
    review: t('reviews.0.review'),
    person: t('reviews.0.person'),
    position: t('reviews.0.position'),
  },
  {
    review: t('reviews.1.review'),
    person: t('reviews.1.person'),
    position: t('reviews.1.position'),
  },
];

export const Clients = () => {
  const t = useTranslations('home.clients');

  const articles = getArticles(t);
  const reviews = getReviews(t);

  return (
    <section className="container flex flex-col gap-[60px]">
      <HeroTitle
        title={t('title')}
        subtitle={t('subtitle')}
        text={t('text')}
      />
      <VerticalSlider navigation>
        {articles.map(article => (
          <div
            key={article.title}
            className="min-w-full flex-shrink-0 md:min-w-[50%]"
          >
            <Card {...article} />
          </div>
        ))}
      </VerticalSlider>
      <section className="flex flex-col gap-2">
        <section className="flex gap-2 max-md:flex-col">
          {reviews.map(review => (
            <ReviewCard key={review.person} {...review} />
          ))}
        </section>
        <div className="rounded-xl border border-[#A4A189] p-4">
          <LargeActionBtn href="/clients" className="h-[100px] py-0">
            {t('button')}
          </LargeActionBtn>
        </div>
      </section>
    </section>
  );
};

const ReviewCard = ({
  person,
  position,
  review,
}: {
  review: string;
  person: string;
  position: string;
}) => (
  <article className="flex min-h-[325px] w-1/2 flex-col justify-between rounded bg-[rgba(255,244,225,0.10)] px-10 py-5 max-md:min-h-[276px] max-md:w-full max-md:gap-8">
    <Text size="3xl" className="leading-[120%] tracking-[-0.48px]">
      {review}
    </Text>
    <Text size="base" weight={700} className="uppercase tracking-[0.12px]">
      {person}, {position}
    </Text>
  </article>
);

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
}) => (
  <article className="flex w-full max-w-[700px] cursor-grab flex-col gap-4 pr-10 max-md:max-w-[340px] max-md:pr-0">
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
    <div className="flex flex-col gap-1">
      <span className="flex items-center justify-between gap-10">
        <Text size="lg" weight={700}>
          {title}
        </Text>
        <Link href={href} aria-label={title}>
          <ArrowRightIcon />
        </Link>
      </span>
      <Text size="lg" color="grey">
        {text}
      </Text>
    </div>
  </article>
);
