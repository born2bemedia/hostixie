'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';

import { Text } from './text';

export const Select = ({
  values,
  placeholder,
  onSelect,
  hint,
  label,
}: {
  values: { label: ReactNode; value: string }[];
  placeholder: string;
  onSelect: (value: string) => void;
  hint?: string;
  label?: string;
}) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const selectedLabel = values.find(v => v.value === selected)?.label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleSelect = (value: string) => {
    setSelected(value);
    onSelect(value);
    setOpen(false);
  };

  return (
    <div ref={ref} className="relative flex flex-col gap-1">
      {label && (
        <Text size="xs" color={!hint ? 'muted' : 'danger'}>
          {label}
        </Text>
      )}
      <button
        type="button"
        onClick={() => setOpen(prev => !prev)}
        className={cn(
          'flex w-full cursor-pointer items-center justify-between gap-2 rounded-[6px] border border-[#A4A189] p-4 text-sm font-medium text-[rgba(164,161,137,1)] outline-0',
          hint && 'border-danger',
        )}
      >
        {selectedLabel || placeholder}
        <ArrowDown />
      </button>
      {open && (
        <div className="absolute top-full left-0 z-[999] mt-2 flex max-w-[226px] flex-col rounded-[6px] border border-[#A4A189] bg-[#FFF4E1] shadow-[0px_10px_25px_0px_rgba(0,0,0,0.10)]">
          {values.map(v => (
            <div
              key={v.value}
              onClick={() => handleSelect(v.value)}
              className="cursor-pointer border-b border-[#A4A189] px-4 py-3 text-sm transition duration-300 ease-in-out last:border-b-0"
            >
              {v.label}
            </div>
          ))}
        </div>
      )}
      {hint && (
        <span className="absolute -bottom-4 left-0">
          <Text size="xs" color="danger">
            {hint}*
          </Text>
        </span>
      )}
    </div>
  );
};

const ArrowDown = ({ classNames }: { classNames?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    className={classNames}
  >
    <path
      d="M6.9995 3.5H8.557C10.4878 3.5 11.2812 4.87083 10.3128 6.545L9.53117 7.8925L8.7495 9.24C7.78117 10.9142 6.20033 10.9142 5.232 9.24L4.45033 7.8925L3.66867 6.545C2.71783 4.87083 3.50533 3.5 5.442 3.5H6.9995Z"
      stroke="#A4A189"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
