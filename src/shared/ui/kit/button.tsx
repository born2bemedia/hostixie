'use client';

import type { ElementType, ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const btnVariants = cva(
  'transition disabled:cursor-not-allowed outline-0 disabled:opacity-50 rounded-lg duration-300 ease-in-out cursor-pointer flex items-center gap-1.5',
  {
    variants: {
      variant: {
        primary:
          'bg-primary border border-primary text-black font-bold hover:bg-[rgba(254,95,5,0.5)] hover:border-[rgba(254,95,5,0.5)]',
        secondary:
          'bg-[#FFF4E1] border border-[#FFF4E1] text-black font-medium hover:bg-[#FFF4E1]/80 hover:border-[#FFF4E1]/80',
        ghost:
          'bg-transparent border border-black text-black font-medium hover:border-black/80 hover:text-black/80',
        glass:
          'bg-transparent border border-transparent text-[#FFF4E1] font-bold hover:bg-[rgba(255,255,255,0.05)] active:bg-[rgba(255,255,255,0.10)]',
        outline:
          'bg-transparent border border-[#FFF4E1] disabled:opacity-30 disabled:cursor-not-allowed text-white font-medium hover:border-[#FFF4E1]/80 hover:text-[#FFF4E1]/80',
        flat: 'bg-black/10 text-black font-medium hover:bg-black/20 hover:border-black/20 hover:text-black/80',
        faded:
          'bg-[rgba(255,255,255,0.10)] font-medium text-white hover:bg-[rgba(255,255,255,0.20)]',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 h-10 text-sm',
        lg: 'h-[62px] text-lg px-10',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

export type ButtonVariants = VariantProps<typeof btnVariants>;

export const Button = ({
  children,
  className,
  variant,
  onClick,
  disabled,
  size,
  fullWidth = false,
  type = 'button',
  as = 'button',
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  as?: 'button' | 'span';
} & ButtonVariants) => {
  const Tag = as;

  return (
    <Tag
      className={cn(
        btnVariants({ variant, size }),
        fullWidth ? 'w-full justify-center' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </Tag>
  );
};
