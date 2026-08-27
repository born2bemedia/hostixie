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
      subtitle={t('subtitle', {
        fallback: 'Ready to Put Your Brand in the Right Conversation?',
      })}
      text={t('text', {
        fallback:
          'Our team is ready to help turn your objectives into a clear plan.',
      })}
      button={t('button', { fallback: 'Let’s Make It Happen' })}
      onClickButtonAction={openRequestForm}
    />
  );
};
