'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const Hero = () => {
  const t = useTranslations('webHosting.hero');

  return (
    <section className="relative flex h-[800px] flex-col justify-center max-md:h-[700px]">
      <section className="relative h-[100px] bg-black">
        <Image
          className="absolute top-0 right-0 h-[132px] w-full object-cover max-md:h-[150px] max-md:object-contain"
          src="/images/web-hosting/hero-t.svg"
          alt="hero-t"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
      <section className="relative flex h-full flex-col bg-[#FFF4E1]">
        <div className="container flex flex-col gap-20 max-md:!mt-[80px] max-md:gap-10">
          <Title
            as="h1"
            color="black"
            weight={400}
            className="w-[70%] text-[112px] leading-[120%] tracking-[1.12px] max-[1300px]:w-full max-md:leading-[48px]"
            uppercase
          >
            {t('title', { fallback: 'Web Hosting Solutions' })}
          </Title>
          <div className="ml-auto flex w-[70%] flex-col gap-2 max-[1300px]:w-full">
            <Title size="5xl" color="black" weight={500}>
              {t('subtitle', {
                fallback:
                  'Awaken Your Website’s Potential with Hostixie Hosting',
              })}
            </Title>
            <Text size="xl" color="black" weight={500} className="opacity-30">
              {t('text', {
                fallback:
                  'Web hosting is the digital conduit that empowers businesses and entrepreneurs to showcase their websites to a vast online audience. Whether you’re building a personal blog or a high-performance site for your project, our web hosting solutions are designed to meet your needs.',
              })}
            </Text>
          </div>
        </div>
        <Image
          className="absolute bottom-0 left-0 h-[132px] w-full object-cover max-md:h-[150px] max-md:object-contain"
          src="/images/web-hosting/hero-b.svg"
          alt="hero-b"
          width={1440}
          height={100}
          unoptimized
        />
      </section>
    </section>
  );
};
