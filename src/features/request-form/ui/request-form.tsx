'use client';

import { useState } from 'react';

import { cn } from '@/shared/lib/utils/cn';
import { useDialogStore } from '@/shared/ui/kit/dialog';

import type {
  FirstStepFormSchema,
  SecondStepFormSchema,
} from '../model/schema';
import { FirstStepForm } from './first-step-form';
import { SecondStepForm } from './second-step-form';
import { ThankYou } from './thank-you';

export const RequestForm = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<FirstStepFormSchema & SecondStepFormSchema>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    projectType: '',
    budget: '',
    timeline: '',
    additionalInfo: '',
    preferredTechnology: '',
    currentWebsite: '',
    designInspiration: '',
  });

  const { setIsOpen } = useDialogStore();

  const onSubmitFirstStep = (args: FirstStepFormSchema) => {
    setData({ ...data, ...args });
    setStep(2);
  };

  const onSubmitSecondStep = (args: SecondStepFormSchema) => {
    setData({ ...data, ...args });
    setStep(3);
  };

  return (
    <div className={cn(step !== 3 && 'px-20 py-10 max-md:px-4')}>
      {step === 1 && <FirstStepForm onSubmit={onSubmitFirstStep} />}
      {step === 2 && <SecondStepForm onSubmit={onSubmitSecondStep} />}
      {step === 3 && <ThankYou onClose={() => setIsOpen(false)} />}
    </div>
  );
};
