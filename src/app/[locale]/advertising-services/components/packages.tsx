'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { GreyDot } from '@/shared/ui/components/grey-dot';
import { ChevronDownIcon } from '@/shared/ui/icons/chevron-down';
import { PlanetsIcon } from '@/shared/ui/icons/planets';
import { Button } from '@/shared/ui/kit/button';
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

const getIncludes = (
  t: ReturnType<typeof useTranslations>,
  packageKey: string,
) => {
  const raw = t.raw(`items.${packageKey}.includes`);
  if (!raw || typeof raw !== 'object') return [];
  return Object.values(raw as Record<string, string>);
};

export const AdvertisingPackages = () => {
  const t = useTranslations('webHosting.packages');
  const [openPackageKey, setOpenPackageKey] = useState<string | null>(null);

  const togglePackage = (key: string) => {
    setOpenPackageKey(prev => (prev === key ? null : key));
  };

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
        <div className="grid grid-cols-3 gap-5 max-lg:grid-cols-1">
          {PACKAGE_KEYS.slice(0, 3).map(key => (
            <PackageCard
              key={key}
              packageKey={key}
              isOpen={openPackageKey === key}
              onToggle={() => togglePackage(key)}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          {PACKAGE_KEYS.slice(3).map(key => (
            <PackageCard
              key={key}
              packageKey={key}
              isOpen={openPackageKey === key}
              onToggle={() => togglePackage(key)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const PackageCard = ({
  packageKey,
  isOpen,
  onToggle,
}: {
  packageKey: string;
  isOpen: boolean;
  onToggle: () => void;
}) => {
  const t = useTranslations('webHosting.packages');
  const { setIsOpen, registerContent } = useDialogStore();

  const title = t(`items.${packageKey}.title`);
  const price = t(`items.${packageKey}.price`);
  const description = t(`items.${packageKey}.description`);
  const includes = getIncludes(t, packageKey);

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
    <article className="flex min-h-full flex-col gap-5 rounded-xl border border-[#A4A189] p-6">
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
        type="button"
        className="flex h-[62px] cursor-pointer items-center justify-center rounded bg-[#FFF4E1]/10 transition-all duration-300 ease-in-out hover:bg-[#FFF4E1]/20"
        onClick={onRequest}
      >
        <Text weight={700}>{t('choosePackage')}</Text>
      </button>

      <div className="flex flex-1 flex-col justify-between gap-5">
        <Text size="base" color="grey">
          {description}
        </Text>

        <div
          className={cn(
            'flex flex-col rounded',
            isOpen && 'bg-[rgba(255,244,225,0.10)]',
          )}
        >
        <Button
          variant="glass"
          fullWidth
          onClick={onToggle}
          className="justify-center gap-2"
        >
          {isOpen ? t('showLess') : t('showMore')}
          <span
            className={cn(
              'inline-flex transition-transform duration-300',
              isOpen && 'rotate-180',
            )}
          >
            <ChevronDownIcon />
          </span>
        </Button>

        <div
          className={cn(
            'overflow-hidden transition-all duration-500 ease-in-out',
            isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0',
          )}
        >
          <div className="flex flex-col gap-2 px-6 pt-2 pb-6">
            <Text size="xs" weight={700}>
              {t('includesLabel')}
            </Text>
            {includes.map(item => (
              <span key={item} className="flex items-start gap-2.5">
                <IncludeBullet />
                <Text size="base" color="grey">
                  {item}
                </Text>
              </span>
            ))}
          </div>
        </div>
        </div>
      </div>
    </article>
  );
};

const IncludeBullet = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="10"
    viewBox="0 0 10 10"
    fill="none"
    className="mt-1.5 shrink-0"
  >
    <path
      d="M1.5 4.99998V3.44248C1.5 1.51164 2.87083 0.718309 4.545 1.68664L5.8925 2.46831L7.24 3.24998C8.91417 4.21831 8.91417 5.79914 7.24 6.76748L5.8925 7.54914L4.545 8.33081C2.87083 9.28164 1.5 8.49414 1.5 6.55748V4.99998Z"
      stroke="#FFF4E1"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
