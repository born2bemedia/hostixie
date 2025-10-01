'use client';

import { useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { GreyDot } from '@/shared/ui/components/grey-dot';
import { ChevronDownIcon } from '@/shared/ui/icons/chevron-down';
import { PlanetsIcon } from '@/shared/ui/icons/planets';
import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { WebHostingCardDef } from '../model/types';

export const WebHostingCard = ({
  name,
  description,
  discount,
  includes,
  oldPrice,
  price,
}: WebHostingCardDef) => {
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <article className="flex h-max flex-1 flex-col gap-5 rounded-xl border border-[#A4A189] p-6">
      <section className="flex flex-col gap-4">
        <div className="relative flex h-[336px] flex-col items-center justify-center rounded-xl border border-[#A4A189]/20 p-6 text-center">
          <GreyDot className="absolute top-6 right-6" />
          <GreyDot className="absolute top-6 left-6" />
          <GreyDot className="absolute right-6 bottom-6" />
          <GreyDot className="absolute bottom-6 left-6" />
          <PlanetsIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          <Title as="h3" size="4xl" weight={700} className="z-10">
            {name}
          </Title>
          <div />
        </div>
        <div className="flex flex-col gap-2">
          <Text size="xs" color="primary" weight={700}>
            {discount}% Off!
          </Text>
          <div className="flex gap-2">
            <span className="flex items-end gap-1">
              <Title as="h4" size="6xl" weight={700} className="leading-[48px]">
                €{price}
              </Title>
              <Text size="xs" weight={700}>
                /month
              </Text>
            </span>
            <Text size="lg" color="grey" lineThrough>
              €{oldPrice}
            </Text>
          </div>
        </div>
      </section>
      <button className="flex h-[62px] cursor-pointer items-center justify-center rounded bg-[#FFF4E1]/10 transition-all duration-300 ease-in-out hover:bg-[#FFF4E1]/20">
        <Text size="lg" weight={700}>
          Choose Plan
        </Text>
      </button>
      <Text size="base" color="grey">
        {description}
      </Text>
      <div className={cn(isShowMore && 'h-auto rounded-md bg-[#FFF4E1]/10')}>
        <Button
          variant="glass"
          onClick={() => setIsShowMore(prev => !prev)}
          fullWidth
        >
          show more <ChevronDownIcon />
        </Button>
        <div
          className={cn(
            'overflow-hidden transition-all duration-500 ease-in-out',
            isShowMore ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="flex flex-col gap-2 px-10 pt-3.5 pb-10">
            <Text size="xs" weight={700}>
              Includes:
            </Text>
            {includes.map(include => (
              <span key={include} className="flex items-center gap-2.5">
                <ArrowRightIcon />
                <Text size="lg" color="white">
                  {include}
                </Text>
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

const ArrowRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
  >
    <path
      d="M1.5 4.99998V3.44248C1.5 1.51164 2.87083 0.718309 4.545 1.68664L5.8925 2.46831L7.24 3.24998C8.91417 4.21831 8.91417 5.79914 7.24 6.76748L5.8925 7.54914L4.545 8.33081C2.87083 9.28164 1.5 8.49414 1.5 6.55748V4.99998Z"
      stroke="#FFF4E1"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
