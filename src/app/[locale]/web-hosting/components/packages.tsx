'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { GreyDot } from '@/shared/ui/components/grey-dot';
import { PlanetsIcon } from '@/shared/ui/icons/planets';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const RequestPackageForm = dynamic(
  () =>
    import('@/features/request-package/ui/request-package-form').then(
      mod => mod.RequestPackageForm,
    ),
  { ssr: false },
);

const PACKAGE_KEYS = ['0', '1', '2', '3', '4'] as const;

export const AdvertisingPackages = () => {
  const t = useTranslations('webHosting.packages');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      <div className="flex flex-col gap-2.5">
        <Title as="h2" size="5xl" weight={700}>
          {t('title')}
        </Title>
        <Text size="xl" color="grey" weight={500}>
          {t('subtitle')}
        </Text>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 max-lg:flex-col">
          {PACKAGE_KEYS.slice(0, 3).map(key => (
            <PackageCard key={key} packageKey={key} />
          ))}
        </div>
        <div className="flex gap-5 max-lg:flex-col">
          {PACKAGE_KEYS.slice(3).map(key => (
            <PackageCard key={key} packageKey={key} wide />
          ))}
        </div>
      </div>
    </section>
  );
};

const PackageCard = ({
  packageKey,
  wide = false,
}: {
  packageKey: string;
  wide?: boolean;
}) => {
  const t = useTranslations('webHosting.packages');
  const { setIsOpen, registerContent } = useDialogStore();

  const title = t(`items.${packageKey}.title`);
  const price = t(`items.${packageKey}.price`);
  const description = t(`items.${packageKey}.description`);

  const onRequest = () => {
    registerContent({
      content: (
        <RequestPackageForm
          title={title}
          price={price}
          onCancel={() => setIsOpen(false)}
        />
      ),
    });
    setIsOpen(true);
  };

  return (
    <article
      className={`flex flex-col gap-5 rounded-xl border border-[#A4A189] p-6 ${wide ? 'flex-1' : 'flex-1'}`}
    >
      <div className="relative flex h-[216px] flex-col items-center justify-center rounded-xl border border-[#A4A189]/20 p-6 text-center">
        <GreyDot className="absolute top-6 right-6" />
        <GreyDot className="absolute top-6 left-6" />
        <GreyDot className="absolute right-6 bottom-6" />
        <GreyDot className="absolute bottom-6 left-6" />
        <PlanetsIcon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <Title as="h3" size="4xl" weight={700} className="z-10">
          {title}
        </Title>
      </div>
      <div className="flex items-end gap-2">
        <Text size="xs" weight={700}>
          {t('from')}
        </Text>
        <Title as="h4" size="6xl" weight={700} className="leading-[48px]">
          {price}
        </Title>
      </div>
      <button
        className="flex h-[62px] cursor-pointer items-center justify-center rounded bg-[#FFF4E1]/10 transition-all duration-300 ease-in-out hover:bg-[#FFF4E1]/20"
        onClick={onRequest}
      >
        <Text weight={700}>{t('choosePackage')}</Text>
      </button>
      <Text size="base" color="grey">
        {description}
      </Text>
    </article>
  );
};
