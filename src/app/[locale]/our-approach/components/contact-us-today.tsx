'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const ContactUsToday = () => {
  const t = useTranslations('ourApproach.contactUs');

  const { openRequestForm } = useRequestForm();

  return (
    <div className="bg-[#FFF4E1] py-20 max-md:py-10">
      <GetInTouch
        title={t('title', { fallback: 'Contact Us Today!' })}
        subtitle={t('subtitle', {
          fallback:
            'Do you have questions, or are you ready to begin your project?',
        })}
        text={t('text', {
          fallback:
            'Our team is here to assist you every step of the way. Whether you want to learn more about our approach or discuss your ideas, we’re ready to bring your vision to life. Let’s make your project a success!',
        })}
        button={t('button', { fallback: 'Let’s Make It Happen' })}
        titleClassName="leading-[120%] tracking-[1.12px] max-md:leading-[120%] max-md:tracking-[1.12px]"
        onClickButton={openRequestForm}
      />
    </div>
  );
};
