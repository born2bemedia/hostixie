'use client';

import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';

export const ReadyChoosePlan = () => {
  const t = useTranslations('webHosting');
  const router = useRouter();

  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container">
        <GetInTouch
          title={t('getInTouch.title')}
          subtitle={t('getInTouch.subtitle')}
          text={t('getInTouch.text')}
          button={t('getInTouch.button')}
          titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
          onClickButtonAction={() => router.push('/contact')}
        />
      </div>
    </section>
  );
};
