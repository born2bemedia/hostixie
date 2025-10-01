'use client';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { WebHostingCardDef } from '../model/types';
import { WebHostingCard } from './web-hosting-card';

export const WebHostingList = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: WebHostingCardDef[];
}) => {
  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <Heading title={title} description={description} />
      <List items={items} />
    </section>
  );
};

const Heading = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <section className="flex flex-col gap-5">
      <Title
        as="h2"
        size="7xl"
        className="leading-[89.6px] tracking-[1.12px]"
        uppercase
      >
        {title}
      </Title>
      <Text
        size="xl"
        color="white"
        className="w-[800px] opacity-30 max-lg:w-full"
      >
        {description}
      </Text>
    </section>
  );
};

const List = ({ items }: { items: WebHostingCardDef[] }) => (
  <section className="flex gap-[60px] max-[1360px]:flex-wrap">
    {items.map(item => (
      <WebHostingCard key={item.name} {...item} />
    ))}
  </section>
);
