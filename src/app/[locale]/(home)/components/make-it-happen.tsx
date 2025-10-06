'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const MakeItHappen = () => {
  const t = useTranslations('home.getInTouch');

  const { openRequestForm } = useRequestForm();

  return (
    <GetInTouch
      title={t('title', { fallback: 'Get in Touch' })}
      subtitle={t('subtitle', { fallback: 'Ready to Start Your Project?' })}
      text={t('text', {
        fallback:
          'We’re here to help you bring your digital presence to life. Whether you need web hosting or a custom-built website, our team is ready to support you.',
      })}
      button={t('button', { fallback: 'Let’s Make It Happen' })}
      onClickButton={openRequestForm}
    />
  );
};
