'use client';

import { useDialogStore } from '@/shared/ui/kit/dialog';

import { RequestForm } from '../ui/request-form';

export const useRequestForm = () => {
  const { setIsOpen, registerContent } = useDialogStore();

  const openRequestForm = () => {
    registerContent({
      content: <RequestForm />,
    });
    setIsOpen(true);
  };

  return {
    openRequestForm,
  };
};
