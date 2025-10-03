'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { ChevronDownIcon } from '@/shared/ui/icons/chevron-down';
import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { WebDevPackage } from '../model/types';

const RequestPackageForm = dynamic(
  () =>
    import('@/features/request-package/ui/request-package-form').then(
      mod => mod.RequestPackageForm,
    ),
  { ssr: false },
);

export const WebDevelopmentCard = ({
  title,
  description,
  price,
  includes,
  imgUrl,
  showFrom = true,
}: WebDevPackage) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const t = useTranslations('webDevCard');
  const { setIsOpen, registerContent } = useDialogStore();

  const onRequestPackageHandle = () => {
    registerContent({
      content: (
        <RequestPackageForm title={title} onCancel={() => setIsOpen(false)} />
      ),
    });
    setIsOpen(true);
  };

  return (
    <article className="relative flex min-h-[495px] w-1/2 flex-col justify-between gap-20 rounded-[12px] border border-[rgba(163,161,137,0.8)] bg-[rgba(163,161,137,0.8)] px-6 pt-[100px] pb-6 max-md:w-full">
      <Image
        className="absolute top-0 right-0 z-0 opacity-30"
        src={imgUrl}
        alt={title}
        width={400}
        height={400}
        unoptimized
      />
      <section className="z-10 flex flex-col gap-5">
        <Title as="h3" size="4xl" color="black" weight={700} uppercase>
          {title}
        </Title>
        <Text size="base" color="black">
          {description}
        </Text>
      </section>
      <section className="z-10 flex flex-col gap-5">
        <section className="flex justify-between gap-4 max-md:flex-col">
          <div className="flex w-1/2 flex-col gap-1 max-md:w-full">
            <Text size="xs" color="black" className="opacity-50">
              {t('price', { fallback: 'Price:' })}
            </Text>
            <span className="flex items-end gap-1">
              {showFrom && (
                <Text size="xs" color="black" weight={700}>
                  {t('from', { fallback: 'from' })}
                </Text>
              )}
              <Text
                size="4xl"
                color="black"
                weight={700}
                className="leading-[30px]"
              >
                {price}
              </Text>
            </span>
          </div>
          <div className="w-1/2 max-md:w-full">
            <Button
              variant="secondary"
              size="lg"
              onClick={onRequestPackageHandle}
              className="max-md:w-full"
              fullWidth
            >
              {t('choosePackage', { fallback: 'Choose Package' })}
            </Button>
          </div>
        </section>
        <div
          className={cn(
            'flex flex-col gap-2.5 rounded-[4px]',
            isShowMore && 'bg-[rgba(255,244,225,0.10)]',
          )}
        >
          <Button
            variant="glass"
            className="ml-auto"
            onClick={() => setIsShowMore(prev => !prev)}
          >
            {isShowMore
              ? t('showLess', { fallback: 'show less' })
              : t('showMore', { fallback: 'show more' })}
            <ChevronDownIcon />
          </Button>
          <ul
            className={cn(
              'flex flex-col gap-1.5',
              'overflow-hidden transition-all duration-500 ease-in-out',
              isShowMore
                ? 'max-h-[500px] p-5 opacity-100'
                : 'max-h-0 opacity-0',
            )}
          >
            {includes.map(include => (
              <li key={include} className="flex items-center gap-2.5">
                <ChooseIcon />
                <Text size="base" color="black">
                  {include}
                </Text>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
};

const ChooseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="10"
    height="9"
    viewBox="0 0 10 9"
    fill="none"
  >
    <path
      d="M1.5 4.49998V2.94248C1.5 1.01164 2.87083 0.218309 4.545 1.18664L5.8925 1.96831L7.24 2.74998C8.91417 3.71831 8.91417 5.29914 7.24 6.26748L5.8925 7.04914L4.545 7.83081C2.87083 8.78164 1.5 7.99414 1.5 6.05748V4.49998Z"
      stroke="black"
      strokeWidth="1.5"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
