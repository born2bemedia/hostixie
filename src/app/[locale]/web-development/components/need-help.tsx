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
          title={t('title')}
          subtitle={t('subtitle')}
          text={t('text')}
          button={t('button')}
          titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
          onClickButtonAction={openRequestForm}
        />
      </div>
    </section>
  );
};
