'use client';

import type { ReactNode } from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const VerticalSlider = ({ children }: { children: ReactNode }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: 'start' });

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex">{children}</div>
    </div>
  );
};
