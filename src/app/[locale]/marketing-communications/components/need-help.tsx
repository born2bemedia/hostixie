'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { GetInTouch } from '@/shared/ui/components/get-in-touch';
import { useDialogStore } from '@/shared/ui/kit/dialog';

const RequestPackageForm = dynamic(
  () =>
    import('@/features/request-package/ui/request-package-form').then(
      mod => mod.RequestPackageForm,
    ),
  { ssr: false },
);

export const NeedHelp = () => {
  const t = useTranslations('webDevelopment.needHelp');
  const { setIsOpen, registerContent } = useDialogStore();

  const openGetInTouchForm = () => {
    registerContent({
      content: (
        <RequestPackageForm
          title={t('formTitle')}
          price={t('formPrice')}
          onCancel={() => setIsOpen(false)}
        />
      ),
    });
    setIsOpen(true);
  };

  return (
    <section className="bg-[#FFF4E1] py-20">
      <div className="container">
        <GetInTouch
          title={t('title')}
          subtitle={t('subtitle')}
          text={t('text')}
          button={t('button')}
          titleClassName="text-[80px] max-md:text-[40px] font-normal leading-[120%] tracking-[1.12px] md:leading-[120%]"
          onClickButtonAction={openGetInTouchForm}
        />
      </div>
    </section>
  );
};
