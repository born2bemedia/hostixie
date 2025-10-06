'use client';

import { cn } from '@/shared/lib/utils/cn';
import { LineUpIcon } from '@/shared/ui/icons/line-up';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const HeroTitle = ({
  title,
  text,
  subtitle,
  color = 'white',
  additionalContent,
  titleClassName,
  subtitleClassName,
}: {
  title: string;
  subtitle?: string;
  text: string;
  color?: 'white' | 'black';
  additionalContent?: React.ReactNode;
  titleClassName?: string;
  subtitleClassName?: string;
}) => (
  <section className="flex flex-col gap-20 max-md:gap-10">
    <Title
      uppercase
      color={color}
      className={cn('text-[112px] max-md:text-[40px]', titleClassName)}
    >
      {title}
    </Title>
    <div className="flex items-end justify-between">
      <LineUpIcon />
      <div className="flex w-[70%] flex-col gap-10 max-md:gap-8">
        <div className="flex flex-col gap-2.5">
          {subtitle && (
            <Title
              as="h3"
              size="3xl"
              color={color}
              className={cn('max-md:text-xl', subtitleClassName)}
            >
              {subtitle}
            </Title>
          )}
          <Text size="xl" color={color} className="opacity-30 max-md:text-base">
            {text}
          </Text>
        </div>
        {additionalContent}
      </div>
    </div>
  </section>
);
