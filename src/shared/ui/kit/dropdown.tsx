'use client';

import { type ReactNode, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { cn } from '@/shared/lib/utils/cn';
import { ArrowBottomIcon } from '@/shared/ui/icons/arrow-bottom';

import { Button } from './button';

export const Dropdown = ({
  label,
  children,
  iconColor,
  contentClassName,
}: {
  label: ReactNode;
  children:
    | ReactNode
    | ((props: { setOpen: (open: boolean) => void }) => ReactNode);
  iconColor?: string;
  contentClassName?: string;
}) => {
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger className="outline-0">
        <Button
          as="span"
          variant="glass"
          className="flex cursor-pointer items-center gap-1.5 outline-0"
        >
          {label}
          <ArrowBottomIcon color={iconColor} />
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={cn('z-50 flex min-w-[200px] flex-col', contentClassName)}
        >
          <section className="bg-black py-2">
            {typeof children === 'function' ? children({ setOpen }) : children}
          </section>
          <DropdownContentLine />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
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
}) => {
  return (
    <DropdownMenu.Item
      onSelect={onClick}
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-xl p-2 outline-0 transition duration-300 ease-in-out hover:bg-[rgba(255,255,255,0.05)]',
        className,
      )}
    >
      {children}
    </DropdownMenu.Item>
  );
};

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
