'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import {
  Content,
  Description,
  Overlay,
  Portal,
  Root,
  Title as DialogTitle,
  Trigger,
} from '@radix-ui/react-dialog';
import { create } from 'zustand';

type DialogStore = {
  isOpen: boolean;
  children: { content: ReactNode | null } | null;
  setIsOpen: (isOpen: boolean) => void;
  registerContent: (
    args: {
      content: ReactNode | null;
    } | null,
  ) => void;
};

export const useDialogStore = create<DialogStore>(set => ({
  isOpen: false,
  children: null,
  setIsOpen: isOpen => set({ isOpen }),
  registerContent: children => set({ children }),
}));

export const Dialog = () => {
  const { isOpen, children, setIsOpen } = useDialogStore();

  return (
    <Root open={isOpen} onOpenChange={setIsOpen}>
      <Trigger />
      <Portal>
        <Overlay className="fixed inset-0 z-[50] animate-[overlayShow_150ms_cubic-bezier(0.16,1,0.3,1)] bg-black/75" />
        <Content
          onOpenAutoFocus={e => e.preventDefault()}
          onCloseAutoFocus={e => e.preventDefault()}
          className="fixed top-1/2 left-1/2 z-[60] flex w-[1000px] -translate-x-1/2 -translate-y-1/2 flex-col focus:outline-none max-lg:w-[96%]"
        >
          <DialogTitle />
          <Description asChild>
            <section className="relative flex w-full flex-col max-lg:max-h-[94vh] max-lg:overflow-y-auto">
              <section className="w-full bg-[#FFF4E1]">
                {children?.content}
              </section>
              <Image
                className="-mt-[1px] h-[60px] w-full object-cover"
                src="/images/dialog-b.svg"
                alt="hero-b"
                width={1000}
                height={60}
                unoptimized
              />
            </section>
          </Description>
        </Content>
      </Portal>
    </Root>
  );
};
