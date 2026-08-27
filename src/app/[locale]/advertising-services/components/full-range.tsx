'use client';

import { useTranslations } from 'next-intl';

import { useRequestForm } from '@/features/request-form/model/use-request-form';

import { Button } from '@/shared/ui/kit/button';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const COLUMN_KEYS = ['0', '1', '2', '3', '4', '5'] as const;

const getColumnItems = (
  t: ReturnType<typeof useTranslations>,
  columnKey: string,
) => {
  const items: string[] = [];
  for (let i = 0; i < 10; i++) {
    const key = `fullRange.columns.${columnKey}.items.${i}`;
    if (!t.has(key)) break;
    items.push(t(key));
  }
  return items;
};

export const FullRange = () => {
  const t = useTranslations('webHosting');
  const { openRequestForm } = useRequestForm();

  return (
    <section className="container flex flex-col gap-7 py-[60px] max-md:py-10">
      <Title as="h2" size="5xl" weight={700} className="leading-[110%]">
        {t('fullRange.title')}
      </Title>
      <Text size="xl" color="grey" weight={500} className="leading-[135%]">
        {t('fullRange.subtitle')}
      </Text>

      <div className="overflow-x-auto rounded-2xl border border-[rgba(164,161,137,0.25)] bg-[#0e0e0e] p-5">
        <div className="flex min-h-[700px] min-w-[1100px] items-stretch">
          {COLUMN_KEYS.map(key => {
            const items = getColumnItems(t, key);

            return (
              <div
                key={key}
                className="flex min-w-0 flex-1 flex-col gap-3.5 overflow-hidden"
              >
                <div className="flex min-h-[78px] items-center p-5">
                  <Text
                    weight={700}
                    className="text-[15px] leading-[120%] text-[#FFF4E1]"
                  >
                    {t(`fullRange.columns.${key}.title`)}
                  </Text>
                </div>
                <div className="h-0.5 w-full shrink-0 bg-primary" />
                <div className="flex flex-1 flex-col justify-between p-5">
                  {items.map(item => (
                    <p
                      key={item}
                      className="flex h-[50px] items-start text-[13.5px] leading-normal text-[#A4A189]"
                    >
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex justify-center pt-3">
        <Button onClick={openRequestForm}>{t('fullRange.button')}</Button>
      </div>
    </section>
  );
};
