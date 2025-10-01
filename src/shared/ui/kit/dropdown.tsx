'use client';

import { type ReactNode, useEffect, useRef, useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { ArrowBottomIcon } from '@/shared/ui/icons/arrow-bottom';

import { Button } from './button';

export const Dropdown = ({
  label,
  children,
}: {
  label: ReactNode;
  children:
    | ReactNode
    | ((props: { setOpen: (value: boolean) => void }) => ReactNode);
}) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
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

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <Button
        variant="glass"
        onClick={() => setOpen(prev => !prev)}
        className="flex cursor-pointer items-center gap-1.5 outline-0"
      >
        {label}
        <ArrowBottomIcon />
      </Button>
      {open && (
        <div className="absolute top-10 left-0 z-[999] flex w-[330px] flex-col">
          <section className="flex flex-col gap-6 bg-black p-5">
            {typeof children === 'function' ? children({ setOpen }) : children}
          </section>
          <DropdownContentLine />
        </div>
      )}
    </div>
  );
};

export const DropdownItem = ({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) => (
  <div
    onClick={onClick}
    className={cn(
      'group flex cursor-pointer items-center gap-1.5 outline-0',
      className,
    )}
  >
    <ArrowBottomIcon classNames="hidden group-hover:flex" />
    {children}
  </div>
);

const DropdownContentLine = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="300"
    height="18"
    viewBox="0 0 300 18"
    fill="none"
    className="ml-auto"
  >
    <path
      d="M190.271 1.46418L215.146 16.791C216.381 17.5617 218.031 17.9948 219.75 18H300V0H0V0.268656H185.667C187.376 0.273651 189.016 0.70162 190.25 1.46418H190.271Z"
      fill="black"
    />
  </svg>
);
