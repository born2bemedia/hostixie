'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const LetsStart = () => {
  const { openRequestForm } = useRequestForm();

  const t = useTranslations('companyOverview.letsStart');

  return (
    <div className="bg-[#FFF4E1] py-20 max-md:py-10">
      <GetInTouch
        title={t('title', { fallback: 'Let’s Start a Conversation' })}
        subtitle={t('subtitle', { fallback: 'Ready to take the next step?' })}
        text={t('text', {
          fallback:
            'Have questions about how we can help your business succeed online? Get in touch and let’s discuss how we can create the perfect web solution for you.',
        })}
        button={t('button', { fallback: 'Let’s Make It Happen' })}
        titleClassName="text-[80px] max-md:text-[40px] leading-[120%] tracking-[1.12px] max-md:leading-[120%] max-md:tracking-[1.12px]"
        onClickButtonAction={openRequestForm}
        subtitleClassName="text-[45px] max-md:text-[20px]"
      />
    </div>
  );
};
