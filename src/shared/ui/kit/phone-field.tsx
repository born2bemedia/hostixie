'use client';

import {
  defaultCountries,
  PhoneInput,
  type PhoneInputProps,
} from 'react-international-phone';
import type { VariantProps } from 'class-variance-authority';
import { cva } from 'class-variance-authority';

import { excludedCountries } from '@/shared/lib/countries';
import { useCountryCode } from '@/shared/lib/hooks/use-country-code';
import { cn } from '@/shared/lib/utils/cn';

import 'react-international-phone/style.css';
import { Text } from './text';

const phoneFieldVariants = cva(
  '!p-4 !rounded-r-[6px] transition-all !text-sm !text-[rgba(164,161,137,1)] placeholder:!text-[rgba(164,161,137,0.50)] duration-300 !w-full !h-full ease-in-out focus:outline-none',
  {
    variants: {
      variant: {
        primary: '!border !border-[#A4A189] !bg-transparent',
      },
      intent: {
        primary: '',
        danger: '!border-danger',
      },
    },
    defaultVariants: {
      intent: 'primary',
      variant: 'primary',
    },
  },
);

export type PhoneFieldVariants = VariantProps<typeof phoneFieldVariants>;

export const PhoneField = ({
  variant = 'primary',
  intent,
  hint,
  label,
  disabled,
  ...args
}: PhoneInputProps &
  PhoneFieldVariants & { hint?: string; label?: string }) => {
  const country = useCountryCode();

  return (
    <label className="relative flex w-full flex-col gap-1">
      <Text size="xs" color={!hint ? 'muted' : 'danger'}>
        {label}
      </Text>
      <PhoneInput
        defaultCountry={
          defaultCountries.some(
            ([, iso2]) => iso2 === country && !excludedCountries.includes(iso2),
          )
            ? country
            : 'gb'
        }
        className={cn(
          '!h-[54px]',
          intent === 'danger' && '!border !border-[#FF4141]',
        )}
        inputClassName={cn(
          phoneFieldVariants({
            variant,
            intent,
          }),
        )}
        countries={defaultCountries.filter(
          ([, iso2]) => !excludedCountries.includes(iso2),
        )}
        countrySelectorStyleProps={{
          buttonClassName: cn(
            '!h-full !bg-transparent !border !border-[#A4A189] !rounded-l-[6px] !pr-3 !pl-2.5',
          ),
          dropdownStyleProps: {
            className: '!outline-none',
          },
        }}
        disabled={disabled}
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
