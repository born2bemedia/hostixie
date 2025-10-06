'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const ReadyChoosePlan = () => {
  const t = useTranslations('webHosting');

  const router = useRouter();

  const onClickHandle = () => {
    router.push('/contact');
  };

  return (
    <GetInTouch
      title={t('getInTouch.title', { fallback: 'Ready to Choose a Plan?' })}
      subtitle={t('getInTouch.subtitle', { fallback: 'Get Expert Guidance' })}
      text={t('getInTouch.text', {
        fallback:
          'If you’re unsure which plan best suits your project’s needs or would like more information about our hosting options, please get in touch with our specialists today.',
      })}
      button={t('getInTouch.button', {
        fallback: 'Contact Us for More Details',
      })}
      titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
      layoutClassName="py-20"
      onClickButton={onClickHandle}
    />
  );
};
