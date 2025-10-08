'use client';

import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import { Divider } from '@/shared/ui/kit/divider';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getReviews = () => [
  {
    text: '"The onboarding was seamless, and their ongoing support keeps our site running smoothly. Couldn\'t ask for a more reliable partner."',
    from: 'Fintech Startup CEO',
  },
  {
    text: '"Our team loved the intuitive dashboard they built for us. Updating content feels effortless now."',
    from: 'EdTech Platform Director',
  },
  {
    text: '"Sales jumped 35% after they optimized our checkout flow. That ROI speaks for itself."',
    from: 'Handmade Jewelry E-commerce Manager',
  },
  {
    text: '"They turned our vision into reality faster than expected. The performance gains are unreal."',
    from: 'SaaS Product Lead',
  },
  {
    text: '"Our nonprofit\'s donation page never worked so well - donations are up 50% this quarter."',
    from: 'Charity Program Coordinator',
  },
  {
    text: '"Their attention to detail in UI/UX design made our mobile app site a pleasure to navigate."',
    from: 'App Developer',
  },
  {
    text: '"From day one, communication was crystal clear. Every milestone was delivered on time."',
    from: 'Marketing Agency Director',
  },
  {
    text: '"They migrated our legacy systems without a hitch. Now everything runs faster and is easier to manage."',
    from: 'Healthcare IT Manager',
  },
];

export const Experience = () => {
  const reviews = getReviews();
  const [emblaRef] = useEmblaCarousel({
    loop: true,
    align: 'start',
  });

  return (
    <section className="relative pb-[260px]">
      <div className="relative container flex flex-col gap-[48px]">
        <Divider />
        <section className="flex flex-col gap-10">
          <Title className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[24px] max-md:leading-[120%] max-md:tracking-[-0.48px]">
            Voices of Experience
          </Title>
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex items-stretch gap-5">
              {reviews.map(review => (
                <div
                  key={review.from}
                  className="flex flex-[0_0_25%] px-2 max-md:flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.3333%]"
                >
                  <Card {...review} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Image
        className="absolute bottom-0 left-0 h-[204px] w-full object-cover"
        src="/images/clients/bbw.svg"
        alt="bb"
        width={1440}
        height={204}
        unoptimized
      />
    </section>
  );
};

const Card = ({ text, from }: { text: string; from: string }) => (
  <article className="flex h-full w-full cursor-grab flex-col justify-between gap-2 rounded bg-[rgba(255,244,225,0.10)] p-10">
    <Text size="2xl" weight={500}>
      {text}
    </Text>
    <Text size="base" color="grey" uppercase>
      {from}
    </Text>
  </article>
);
