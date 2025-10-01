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
      fallback: 'Custom Portfolio Website for a Creative Agency',
    }),
    text: t('articles.0.text', {
      fallback:
        'We developed a professional portfolio website for a creative agency, showcasing their work with a sleek and modern design. The site helped increase both brand awareness and client inquiries by 30%.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-1.jpg',
  },
  {
    title: t('articles.1.title', {
      fallback: 'Tailored E-Commerce Platform for a Retail Business',
    }),
    text: t('articles.1.text', {
      fallback:
        'We designed and developed a custom e-commerce platform for a retail company, featuring a user-friendly interface and seamless checkout process. This platform doubled the client’s sales within the first three months of launch.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-2.jpg',
  },
  {
    title: t('articles.2.title', {
      fallback: 'SEO-Optimized Website for a Consulting Firm',
    }),
    text: t('articles.2.text', {
      fallback:
        'We partnered with a consulting firm to create an SEO-optimized website, which significantly enhanced their online visibility. By implementing proven SEO strategies, we helped them attract a wider audience and improve their lead generation.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-3.jpg',
  },
  {
    title: t('articles.3.title', {
      fallback: 'Responsive Website Redesign for a Fitness Business',
    }),
    text: t('articles.3.text', {
      fallback:
        'We redesigned a fitness business website to be fully responsive, ensuring optimal functionality on all devices. As a result, the business saw a 40% increase in sign-ups and a 25% improvement in customer engagement.',
    }),
    href: '/',
    imgUrl: '/images/home/clients-4.jpg',
  },
];

const getReviews = () => [
  {
    review:
      '“The website perfectly showcases our agency’s work. The team truly understood our brand and brought our vision to life in a way that resonates with our clients.”',
    person: 'John D.',
    position: 'Managing Director at Creative Agency',
  },
  {
    review:
      '“The new e-commerce platform has transformed my business. It’s easy to use, and we’ve seen an increase in traffic and customer engagement. A game-changer for our sales!”',
    person: 'Emma W.',
    position: 'Retail Business Owner',
  },
];

export const Clients = () => {
  const t = useTranslations('home.clients');

  const articles = getArticles(t);

  return (
    <section className="container flex flex-col gap-10">
      <HeroTitle
        title={t('title', { fallback: 'Clients' })}
        subtitle={t('subtitle', {
          fallback: 'Success Stories Across Various Industries',
        })}
        text={t('text', {
          fallback:
            'We have had the pleasure of working with clients from various sectors, helping them achieve their digital objectives through reliable web hosting and expert web development services.',
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
          {getReviews().map(review => (
            <ReviewCard key={review.person} {...review} />
          ))}
        </section>
        <div className="rounded-xl border border-[#A4A189] p-4">
          <LargeActionBtn href="/clients">
            Check Out Our Full Client Portfolio
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
    <span className="flex items-center max-md:flex-col max-md:items-start max-md:gap-0.5">
      <Text size="base" weight={700}>
        {person},
      </Text>{' '}
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
