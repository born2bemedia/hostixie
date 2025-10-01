'use client';

import type { ReactNode } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';

const btnVariants = cva(
  'transition disabled:cursor-not-allowed disabled:opacity-50 rounded-lg duration-300 ease-in-out cursor-pointer flex items-center gap-1.5',
  {
    variants: {
      variant: {
        primary:
          'bg-primary border border-primary text-black font-bold hover:bg-[rgba(254,95,5,0.5)] hover:border-[rgba(254,95,5,0.5)]',
        secondary:
          'bg-white border border-white text-black font-medium hover:bg-[#f7f7f7] hover:border-[#f7f7f7]',
        ghost:
          'bg-transparent border border-black text-black font-medium hover:border-black/80 hover:text-black/80',
        glass:
          'bg-transparent border border-transparent text-[#FFF4E1] font-bold hover:bg-[rgba(255,255,255,0.05)] active:bg-[rgba(255,255,255,0.10)]',
      },
      size: {
        sm: 'px-2 py-1 text-sm',
        md: 'px-4 h-10 text-sm',
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
}: {
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
} & ButtonVariants) => {
  return (
    <button
      className={cn(
        btnVariants({ variant, size }),
        fullWidth ? 'w-full' : 'w-max',
        className,
      )}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
