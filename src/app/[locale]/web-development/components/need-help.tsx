'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const NeedHelp = () => {
  const t = useTranslations('webDevelopment.needHelp');

  const { openRequestForm } = useRequestForm();

  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container">
        <GetInTouch
          title={t('title', {
            fallback: 'Need Help Choosing a Service or Package?',
          })}
          subtitle={t('subtitle', {
            fallback:
              'Not sure which service or package is right for your business? No problem!',
          })}
          text={t('text', {
            fallback:
              'Our team is here to guide you through every step of the process. Whether you need advice on a custom website, e-commerce platform, or anything in between, we’re happy to provide personalized recommendations based on your brand ambitions. Reach out today and let’s explore how we can bring your vision to life with the ideal solution for your business needs.',
          })}
          button={t('button', { fallback: 'Get in Touch' })}
          titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
          onClickButton={openRequestForm}
        />
      </div>
    </section>
  );
};
