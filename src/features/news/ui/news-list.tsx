'use client';

import { Divider } from '@/shared/ui/kit/divider';
import { Title } from '@/shared/ui/kit/title';

import type { News } from '../model/types';
import { NewsCard } from './news-card';

export const NewsList = ({
  heading,
  items,
}: {
  heading: string;
  items: News[];
}) => {
  return (
    <section id={heading} className="bg-[#FFF4E1] py-[60px]">
      <div className="container flex flex-col gap-[48px]">
        <Divider />
        <section className="flex flex-col gap-10">
          <Title
            color="black"
            weight={500}
            className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[24px] max-md:leading-[120%] max-md:tracking-[-0.48px]"
          >
            {heading}
          </Title>
          <div className="flex gap-2.5 max-md:flex-col">
            {items.map(item => (
              <NewsCard key={item.title} {...item} />
            ))}
          </div>
        </section>
      </div>
    </section>
  );
};
