'use client';

import type { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { Button } from '../kit/button';

export const VerticalSlider = ({
  children,
  navigation = false,
}: {
  children: ReactNode;
  navigation?: boolean;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    axis: 'x',
  });

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  return (
    <section className="flex flex-col gap-5">
      {navigation && (
        <div className="flex items-center gap-10">
          <span className="h-1 w-full bg-[#FFF4E1] opacity-40" />
          <nav className="flex shrink-0 items-center gap-2">
            <Button variant="outline" onClick={scrollPrev}>
              <ArrowLeft />
            </Button>
            <Button variant="outline" onClick={scrollNext}>
              <ArrowRight />
            </Button>
          </nav>
        </div>
      )}
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </section>
  );
};

export const ArrowRight = ({ color = '#FFF4E1' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g clipPath="url(#clip0_182_17160)">
      <path
        d="M9 2.21655L15.1943 8.41081L15.1943 9.59875L9 15.793"
        stroke={color}
        strokeWidth="2.4"
      />
      <path d="M15.7882 9.00478H2.21177" stroke={color} strokeWidth="2.4" />
    </g>
    <defs>
      <clipPath id="clip0_182_17160">
        <rect
          width="12"
          height="12"
          fill="white"
          transform="translate(9 0.519531) rotate(45)"
        />
      </clipPath>
    </defs>
  </svg>
);

export const ArrowLeft = ({ color = '#FFF4E1' }: { color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
  >
    <g clipPath="url(#clip0_182_17156)">
      <path
        d="M9 15.793L2.80574 9.59871L2.80574 8.41077L9 2.21652"
        stroke={color}
        strokeWidth="2.4"
      />
      <path d="M2.21177 9.00474H15.7882" stroke={color} strokeWidth="2.4" />
    </g>
    <defs>
      <clipPath id="clip0_182_17156">
        <rect
          width="12"
          height="12"
          fill="white"
          transform="translate(9 17.49) rotate(-135)"
        />
      </clipPath>
    </defs>
  </svg>
);
