'use client';

import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import useEmblaCarousel from 'embla-carousel-react';

import { ArrowLeft, ArrowRight } from '@/shared/ui/components/vertical-slider';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getReviews = (t: ReturnType<typeof useTranslations>) => [
  {
    type: t('cards.0.type', { fallback: 'Creative Industry' }),
    title: t('cards.0.title', { fallback: 'Photographer Portfolio' }),
    client: t('cards.0.client', { fallback: 'Commercial Photography Agency' }),
    project: t('cards.0.project', { fallback: 'Corporate portfolio website' }),
    services: [
      t('cards.0.services.0', { fallback: 'Custom Web Development' }),
      t('cards.0.services.1', { fallback: 'Hosting' }),
    ],
    outcomes: [
      t('cards.0.outcomes.0', {
        fallback: 'Clean, minimalist design focused on visuals',
      }),
      t('cards.0.outcomes.1', {
        fallback: 'Fully responsive layout with fast load times',
      }),
      t('cards.0.outcomes.2', {
        fallback: '30% increase in booking inquiries',
      }),
    ],
    review: t('cards.0.review', {
      fallback:
        '"The new website reflects our portfolio with precision and professionalism. The team understood our brand identity and executed it flawlessly."',
    }),
  },
  {
    type: t('cards.1.type', { fallback: 'Retail' }),
    title: t('cards.1.title', { fallback: 'E-Commerce for Handmade Goods' }),
    client: t('cards.1.client', { fallback: 'Handmade Goods Supplier' }),
    project: t('cards.1.project', { fallback: 'Custom e-commerce platform' }),
    services: ['WooCommerce Development', 'VPS Hosting'],
    outcomes: [
      t('cards.1.outcomes.0', { fallback: 'Easy-to-manage product system' }),
      t('cards.1.outcomes.1', { fallback: 'Streamlined checkout process' }),
      t('cards.1.outcomes.2', {
        fallback: '2× growth in online sales in 3 months',
      }),
    ],
    review: t('cards.1.review', {
      fallback:
        '"The e-commerce platform has transformed our sales process and opened new revenue channels for our wholesale clients."',
    }),
  },
  {
    type: t('cards.2.type', { fallback: 'Health & Wellness' }),
    title: t('cards.2.title', { fallback: 'Wellness Coaching Website' }),
    client: t('cards.2.client', { fallback: 'Corporate Wellness Consultancy' }),
    project: t('cards.2.project', {
      fallback: 'Content-focused business website',
    }),
    services: [
      t('cards.2.services.0', { fallback: 'WordPress Development' }),
      t('cards.2.services.1', { fallback: 'SEO Setup' }),
    ],
    outcomes: [
      t('cards.2.outcomes.0', {
        fallback: 'Full SEO optimization and structure',
      }),
      t('cards.2.outcomes.1', {
        fallback: 'Blog-ready backend for regular updates',
      }),
      t('cards.2.outcomes.2', { fallback: '80% boost in organic traffic' }),
    ],
    review: t('cards.2.review', {
      fallback:
        '"The process was seamless. The new site is visually appealing, ranks highly, and allows our team to update content anytime without outside help."',
    }),
  },
  {
    type: t('cards.3.type', { fallback: 'Fitness' }),
    title: t('cards.3.title', { fallback: 'Trainer Website Redesign' }),
    client: t('cards.3.client', {
      fallback: 'Corporate Fitness & Training Provider',
    }),
    project: t('cards.3.project', {
      fallback: 'Website redesign for mobile performance',
    }),
    services: [
      t('cards.3.services.0', { fallback: 'UI/UX Redesign' }),
      t('cards.3.services.1', { fallback: 'Managed WordPress Hosting' }),
    ],
    outcomes: [
      t('cards.3.outcomes.0', { fallback: 'Mobile-first responsive layout' }),
      t('cards.3.outcomes.1', { fallback: 'Bounce rate dropped by 25%' }),
      t('cards.3.outcomes.2', { fallback: '40% more client sign-ups' }),
    ],
    review: t('cards.3.review', {
      fallback:
        '"The redesign improved everything. Corporate clients can now book training sessions on mobile without issues, and engagement has never been higher."',
    }),
  },
  {
    type: t('cards.4.type', { fallback: 'Creative Services' }),
    title: t('cards.4.title', { fallback: 'Architecture Studio Showcase' }),
    client: t('cards.4.client', {
      fallback: 'Studio Forma – Boutique Architecture Firm',
    }),
    project: t('cards.4.project', {
      fallback: 'Visual portfolio & lead generation site',
    }),
    services: [
      t('cards.4.services.0', { fallback: 'Custom Web Development' }),
      t('cards.4.services.1', { fallback: 'Performance Optimization' }),
    ],
    outcomes: [
      t('cards.4.outcomes.0', {
        fallback: 'Elegant, image-centric design to highlight projects',
      }),
      t('cards.4.outcomes.1', {
        fallback: 'Integrated contact and inquiry forms',
      }),
      t('cards.4.outcomes.2', { fallback: '50% increase in qualified leads' }),
    ],
    review: t('cards.4.review', {
      fallback:
        '"The site gives our work the presentation it deserves. Clients often mention it during our first meetings. Very professional build."',
    }),
  },
  {
    type: t('cards.5.type', { fallback: 'Food & Beverage Manufacturing' }),
    title: t('cards.5.title', { fallback: 'Bakery Website' }),
    client: t('cards.5.client', {
      fallback: 'Wholesale Bakery & Food Supplier',
    }),
    project: t('cards.5.project', {
      fallback: 'Informational website with menu and pre-order features',
    }),
    services: [
      t('cards.5.services.0', { fallback: 'WordPress Development' }),
      t('cards.5.services.1', { fallback: 'Hosting & Support' }),
    ],
    outcomes: [
      t('cards.5.outcomes.0', { fallback: 'Simple CMS to update daily menus' }),
      t('cards.5.outcomes.1', {
        fallback: 'Optimized for local SEO and mobile browsing',
      }),
      t('cards.5.outcomes.2', {
        fallback: '3× increase in pre-order requests',
      }),
    ],
    review: t('cards.5.review', {
      fallback:
        '"We now receive bulk orders directly through the website. It has significantly improved our reach and streamlined customer communications."',
    }),
  },
  {
    type: t('cards.6.type', { fallback: 'Education' }),
    title: t('cards.6.title', { fallback: 'Online Learning Platform' }),
    client: t('cards.6.client', {
      fallback: 'SkillTrack – Independent Course Creator',
    }),
    project: t('cards.6.project', {
      fallback: 'Learning management site with member access',
    }),
    services: [
      t('cards.6.services.0', { fallback: 'LMS Integration' }),
      t('cards.6.services.1', { fallback: 'Payment System Setup' }),
    ],
    outcomes: [
      t('cards.6.outcomes.0', {
        fallback: 'Seamless student enrollment and payment',
      }),
      t('cards.6.outcomes.1', {
        fallback: 'Course dashboard with progress tracking',
      }),
      t('cards.6.outcomes.2', {
        fallback: '5× user growth in the first quarter',
      }),
    ],
    review: t('cards.6.review', {
      fallback:
        '"The platform is intuitive for both me and my students. Support was excellent throughout. Couldn\'t have launched without their help."',
    }),
  },
  {
    type: t('cards.7.type', { fallback: 'Entertainment' }),
    title: t('cards.7.title', { fallback: 'Event Landing Page' }),
    client: t('cards.7.client', {
      fallback: 'Soundwave Fest – Annual Music Festival',
    }),
    project: t('cards.7.project', {
      fallback: 'Promo landing page with ticket integration',
    }),
    services: [
      t('cards.7.services.0', { fallback: 'Landing Page Design' }),
      t('cards.7.services.1', { fallback: 'Ticketing Integration' }),
    ],
    outcomes: [
      t('cards.7.outcomes.0', {
        fallback: 'Eye-catching, on-brand single-page site',
      }),
      t('cards.7.outcomes.1', {
        fallback: 'Embedded ticket purchase and social media feeds',
      }),
      t('cards.7.outcomes.2', {
        fallback: '70% of tickets sold via the website',
      }),
    ],
    review: t('cards.7.review', {
      fallback:
        '"The page captured the energy of our event and made ticketing simple. We\'ll be working with them again next year for sure."',
    }),
  },
];

export const ClientReviews = () => {
  const t = useTranslations('clients.clientReviews');

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    skipSnaps: false,
  });

  const reviews = getReviews(t);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
    }
  }, [emblaApi, reviews]);

  return (
    <section className="relative bg-[#FFF4E1] py-20 pb-[160px] max-md:py-20">
      <div className="container flex flex-col gap-10 max-md:gap-2">
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-10">
              {reviews.map(review => (
                <div
                  key={review.title}
                  className="flex-[0_0_50%] px-5 max-md:flex-[0_0_100%] max-md:px-0"
                >
                  <Card {...review} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <section className="flex items-center gap-10">
          <Divider />
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              onClick={scrollPrev}
              className="border-black hover:border-black/80"
            >
              <ArrowLeft color="black" />
            </Button>
            <Button
              variant="outline"
              onClick={scrollNext}
              className="border-black hover:border-black/80"
            >
              <ArrowRight color="black" />
            </Button>
          </div>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[134px] w-full object-cover"
        src="/images/clients/bb.svg"
        alt="world"
        width={750}
        height={134}
        unoptimized
      />
    </section>
  );
};

const Card = ({
  type,
  title,
  client,
  project,
  services,
  outcomes,
  review,
}: {
  type: string;
  title: string;
  client: string;
  project: string;
  services: string[];
  outcomes: string[];
  review: string;
}) => {
  const t = useTranslations('clients.clientReviews');

  return (
    <article className="flex h-auto flex-col gap-5 rounded-[4px] bg-black/10 px-10 py-5 max-md:px-5">
      <div className="flex flex-col gap-2">
        <Text size="xs" color="primary" weight={700}>
          {type}
        </Text>
        <Title size="3xl" color="black" weight={500}>
          {title}
        </Title>
      </div>
      <section className="flex flex-col gap-2.5">
        <LabelValue
          label={t('client', { fallback: 'Client:' })}
          value={client}
        />
        <div className="flex justify-between">
          <LabelValue
            label={t('project', { fallback: 'Project:' })}
            value={project}
          />
          <LabelValue
            label={t('services', { fallback: 'Services:' })}
            value={services.join(', ')}
          />
        </div>
      </section>
      <section className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-2 rounded-[4px] bg-black/10 p-5">
          <Text size="xs" color="black" weight={700}>
            {t('outcomes', { fallback: 'Outcomes:' })}
          </Text>
          <ul className="flex flex-col gap-2">
            {outcomes.map(outcome => (
              <li key={outcome} className="flex items-center gap-2.5">
                <PlayIcon color="black" classNames="shrink-0" />
                <Text size="base" color="black">
                  {outcome}
                </Text>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 rounded-[4px] bg-black/10 p-5">
          <Text
            size="2xl"
            color="black"
            weight={700}
            className="max-md:text-[24px]"
          >
            {review}
          </Text>
        </div>
      </section>
    </article>
  );
};

const LabelValue = ({ label, value }: { label: string; value: string }) => (
  <section className="flex flex-col gap-2">
    <Text size="base" color="black" weight={500} className="opacity-30">
      {label}
    </Text>
    <Text size="base" color="black" weight={500}>
      {value}
    </Text>
  </section>
);
