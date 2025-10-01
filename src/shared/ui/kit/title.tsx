'use client';

import type { ElementType, JSX, PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const titleVariants = cva('transition duration-300 ease-in-out', {
  variants: {
    size: {
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl':
        'text-5xl leading-[52.8px] tracking-[-0.48px] max-md:text-[20px] max-md:leading-[120%]',
      '6xl': 'text-6xl max-md:text-[40px]',
      '7xl':
        'text-[80px] leading-[89.6px] tracking-[1.12px] max-md:text-[52px] max-md:leading-[120%] max-md:tracking-[1.12px]',
    },
    color: {
      white: 'text-white',
      black: 'text-black',
      primary: 'text-primary',
    },
    weight: {
      400: 'font-normal',
      500: 'font-medium',
      700: 'font-bold',
    },
  },
  defaultVariants: {
    size: '7xl',
    color: 'white',
    weight: 400,
  },
});

export type TitleVariants = VariantProps<typeof titleVariants>;

export const Title = ({
  children,
  className,
  color,
  weight,
  size,
  as = 'h2',
  capitalize = false,
  uppercase = false,
}: PropsWithChildren<
  {
    className?: string;
    as?: ElementType;
    capitalize?: boolean;
    uppercase?: boolean;
  } & TitleVariants
>) => {
  const Tag = as as keyof JSX.IntrinsicElements;

  return (
    <Tag
      className={cn(
        titleVariants({ color, weight, size }),
        capitalize && 'capitalize',
        className,
        uppercase && 'uppercase',
      )}
    >
      {children}
    </Tag>
  );
};
