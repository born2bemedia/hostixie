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
      <div>
        <Button onClick={openRequestForm}>{t('fullRange.button')}</Button>
      </div>
      <div className="overflow-x-auto rounded-2xl border border-[rgba(164,161,137,0.25)] bg-[#0e0e0e] p-5">
        <div className="flex min-w-[1000px] gap-0">
          {COLUMN_KEYS.map(key => (
            <div key={key} className="flex flex-1 flex-col gap-3.5">
              <div className="flex min-h-[80px] items-center p-5">
                <Text size="base" weight={700} className="leading-[120%]">
                  {t(`fullRange.columns.${key}.title`)}
                </Text>
              </div>
              <div className="bg-primary h-0.5 w-full" />
              <div className="flex flex-col p-5">
                {getColumnItems(t, key).map(item => (
                  <Text
                    key={item}
                    size="base"
                    color="grey"
                    className="text-[13.5px] leading-[30px]"
                  >
                    {item}
                  </Text>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
