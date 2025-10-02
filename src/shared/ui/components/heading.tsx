'use client';

import { Text } from '@/shared/ui/kit/text';

import { Title } from '../kit/title';

export const Heading = ({
  text,
  title,
  color = 'white',
}: {
  title: string;
  text: string;
  color?: 'white' | 'black';
}) => (
  <div className="flex flex-col gap-5">
    <Title
      className="leading-[89.6px] tracking-[1.12px] max-md:text-[40px] max-md:leading-[54px] max-md:tracking-[1.12px]"
      color={color}
      uppercase
    >
      {title}
    </Title>
    <Text
      size="xl"
      color={color === 'white' ? 'grey' : 'black'}
      className="w-[800px] opacity-50 max-lg:w-full"
    >
      {text}
    </Text>
  </div>
);
