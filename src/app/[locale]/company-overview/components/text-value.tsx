'use client';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const TextValue = ({
  title,
  subtitle,
  text,
  lineUpClassName,
  titleClassName,
  additionalContent,
  layoutClassName,
}: {
  title: string;
  subtitle: React.ReactNode;
  text: string;
  lineUpClassName?: string;
  titleClassName?: string;
  additionalContent?: React.ReactNode;
  layoutClassName?: string;
}) => {
  return (
    <section className="relative bg-black py-20">
      <div
        className={cn(
          'relative container flex justify-between gap-20 max-lg:flex-col max-lg:gap-5',
          layoutClassName,
        )}
      >
        <Title className={cn('shrink-0', titleClassName)} uppercase>
          {title}
        </Title>
        <LineUp
          className={cn(
            'absolute bottom-0 left-0 max-lg:hidden',
            lineUpClassName,
          )}
        />
        <section className="flex items-end gap-5">
          <LineUp
            className={cn('hidden shrink-0 max-lg:block', lineUpClassName)}
          />
          <div className="flex flex-col gap-2">
            <Title as="h3" size="3xl" weight={500} color="white">
              {subtitle}
            </Title>
            <Text
              size="xl"
              color="white"
              weight={500}
              className="leading-[120%] opacity-50"
            >
              {text}
            </Text>
          </div>
        </section>
      </div>
      {additionalContent}
    </section>
  );
};

const LineUp = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="45"
    viewBox="0 0 32 45"
    fill="none"
    className={className}
  >
    <path d="M32 44H6C4.66667 44 2 42.8 2 38C2 33.2 2 12 2 2" stroke="white" />
    <circle cx="2" cy="2.5" r="2" fill="white" />
  </svg>
);
