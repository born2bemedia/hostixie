'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Link } from '@/i18n/navigation';

import { HeroTitle } from '@/shared/ui/components/hero-title';
import { LargeActionBtn } from '@/shared/ui/components/large-action-btn';
import { VerticalSlider } from '@/shared/ui/components/vertical-slider';
import { ArrowRightIcon } from '@/shared/ui/icons/arrow-right';
import { Text } from '@/shared/ui/kit/text';

const getArticles = (t: ReturnType<typeof useTranslations>) => [
  {
    title: t('articles.0.title', {
      fallback: 'Brand Awareness Campaign for a Consumer Brand',
    }),
    text: t('articles.0.text', {
      fallback:
        'We developed an integrated advertising campaign designed to strengthen brand recognition and create more consistent communication across selected media channels. The project combined campaign strategy, creative development, visual assets, and coordinated advertising placement.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-1.jpg',
  },
  {
    title: t('articles.1.title', {
      fallback: 'Market Research for a Growing Retail Business',
    }),
    text: t('articles.1.text', {
      fallback:
        'We conducted market and audience research to help a growing retail business better understand customer expectations, competitive positioning, and opportunities for future communication. The findings supported a clearer marketing direction and campaign strategy.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-2.jpg',
  },
];

const getReviews = (t: ReturnType<typeof useTranslations>) => [
  {
    review: t('reviews.0.review', {
      fallback:
        '“Hostixie helped us turn a collection of ideas into a clear advertising strategy. The campaign felt consistent across every channel and gave our brand a much stronger, more recognizable presence.”',
    }),
    person: t('reviews.0.person', {
      fallback: 'Daniel Morris',
    }),
    position: t('reviews.0.position', {
      fallback: 'Founder of Northline Consumer Goods',
    }),
  },
  {
    review: t('reviews.1.review', {
      fallback:
        '“What impressed me most was how quickly the team understood our business and the message we wanted to communicate. They gave us a clearer direction for both our brand communication and visual identity.”',
    }),
    person: t('reviews.1.person', {
      fallback: 'Sophie Bennett',
    }),
    position: t('reviews.1.position', {
      fallback: 'Managing Director of Verity Consulting',
    }),
  },
];

export const Clients = () => {
  const t = useTranslations('home.clients');

  const articles = getArticles(t);
  const reviews = getReviews(t);
  return (
    <section className="container flex flex-col gap-10">
      <HeroTitle
        title={t('title', { fallback: 'Clients' })}
        subtitle={t('subtitle', {
          fallback: 'Real Challenges, Strategic Solutions',
        })}
        text={t('text', {
          fallback:
            'From emerging brands looking to establish their identity to established businesses preparing new campaigns or entering new markets, we help clients turn business objectives into focused advertising and communication initiatives.',
        })}
      />
      <VerticalSlider navigation>
        {articles.map(article => (
          <div
            key={article.title}
            className="min-w-full flex-shrink-0 md:min-w-[50%] lg:min-w-[33%]"
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
          <LargeActionBtn href="/clients">
            {t('button', { fallback: 'Explore More Projects' })}
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
    <span className="flex items-center gap-1 max-md:flex-col max-md:items-start">
      <Text size="base" weight={700}>
        {person},
      </Text>
      <Text size="base" color="grey">
        {position}
      </Text>
    </span>
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
  <article className="flex w-full max-w-[700px] cursor-grab flex-col gap-4 pr-8 max-md:max-w-[340px]">
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
    <div className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between gap-10">
        <Text size="lg" weight={700}>
          {title}
        </Text>
        <Link href={href}>
          <ArrowRightIcon />
        </Link>
      </span>
      <Text size="lg" color="grey">
        {text}
      </Text>
    </div>
  </article>
);
