'use client';

import type { InputHTMLAttributes } from 'react';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { cn } from '@/shared/lib/utils/cn';
import { Text } from '@/shared/ui/kit/text';

const textAreaVariants = cva(
  'p-4 rounded-[6px] h-[242px] resize-none text-sm border placeholder:text-[rgba(164,161,137,0.50)] text-[rgba(164,161,137,1)] duration-300 w-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: 'border-[#A4A189] bg-transparent',
      },
      intent: {
        primary: '',
        danger: 'border-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type TextAreaVariants = VariantProps<typeof textAreaVariants>;

export const TextArea = ({
  className,
  label,
  intent,
  variant,
  hint,
  ...args
}: InputHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
  hint?: string;
} & TextAreaVariants) => {
  return (
    <label className="relative flex w-full flex-col gap-1">
      <Text size="xs" color={!hint ? 'muted' : 'danger'}>
        {label}
      </Text>
      <textarea
        className={cn(textAreaVariants({ intent, variant }), className)}
        {...args}
      />
      {hint && (
        <span className="absolute -bottom-4 left-0">
          <Text size="xs" color="danger">
            {hint}*
          </Text>
        </span>
      )}
    </label>
  );
};
