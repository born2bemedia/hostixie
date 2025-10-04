'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const OurPhilosophy = () => {
  const t = useTranslations('ourApproach.ourPhilosophy');

  return (
    <section className="relative bg-[#FFF4E1]">
      <Image
        className="absolute -top-60 left-0 z-0 max-lg:hidden"
        src="/images/our-philosophy/world.svg"
        alt="world"
        width={909}
        height={909}
        unoptimized
      />
      <div className="z-10 py-20 max-md:pt-0 max-md:pb-10">
        <div className="relative container flex flex-col gap-10">
          <Title color="black" uppercase>
            {t('title', { fallback: 'Our Philosophy' })}
          </Title>
          <div className="ml-auto flex w-[80%] flex-col gap-2">
            <Title size="5xl" weight={500} color="black">
              {t('subtitle', {
                fallback: 'Building Strong, Long-Lasting Relationships',
              })}
            </Title>
            <Text size="xl" color="black" className="opacity-50">
              {t('text', {
                fallback:
                  'We don’t just deliver projects; we build partnerships. Our philosophy centers on understanding your business goals and collaborating to achieve them. We prioritize collaboration, creativity, and commitment, ensuring that we create web solutions that not only meet but inspire. Your vision drives us, and we make sure it’s brought to life in the most impactful way possible.',
              })}
            </Text>
          </div>
          <LineUpIcon />
          <LineDownIcon />
        </div>
      </div>
    </section>
  );
};

const LineUpIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className="absolute bottom-0 left-0 max-md:left-4"
  >
    <path d="M32 44H6C4.66667 44 2 42.8 2 38C2 33.2 2 12 2 2" stroke="black" />
    <circle cx="2" cy="2.5" r="2" fill="black" />
  </svg>
);

const LineDownIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className="absolute top-0 right-0 max-md:right-4"
  >
    <path
      d="M3.67176e-06 0.999997L26 1C27.3333 1 30 2.2 30 7C30 11.8 30 33 30 43"
      stroke="black"
    />
    <circle
      cx="30"
      cy="42.5"
      r="2"
      transform="rotate(-180 30 42.5)"
      fill="black"
    />
  </svg>
);
