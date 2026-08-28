'use client';

import { useTranslations } from 'next-intl';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const SERVICE_KEYS = ['0', '1', '2', '3', '4', '5', '6'] as const;

const getItems = (
  t: ReturnType<typeof useTranslations>,
  serviceKey: string,
) => {
  const items: string[] = [];
  for (let i = 0; i < 12; i++) {
    const key = `services.${serviceKey}.items.${i}`;
    if (!t.has(key)) break;
    items.push(t(key));
  }
  return items;
};

const SERVICE_LEFT_COLUMN_COUNTS: Partial<Record<string, number>> = {
  '3': 7,
};

export const AdvertisingServices = () => {
  const t = useTranslations('webHosting');

  return (
    <section className="container flex flex-col gap-10 py-[60px] max-md:py-10">
      {SERVICE_KEYS.map(key => {
        const items = getItems(t, key);
        const mid =
          SERVICE_LEFT_COLUMN_COUNTS[key] ?? Math.ceil(items.length / 2);

        return (
          <article
            key={key}
            className="flex gap-[100px] overflow-hidden rounded-xl border border-[#A4A189] p-[60px] max-lg:flex-col max-lg:gap-10 max-md:p-6"
          >
            <div className="flex flex-1 flex-col gap-[15px]">
              <Title as="h3" size="5xl" weight={700} className="leading-[120%]">
                {t(`services.${key}.title`)}
              </Title>
              <Text size="lg" weight={500} className="leading-[130%]">
                {t(`services.${key}.subtitle`)}
              </Text>
              <Text size="base" color="grey" className="leading-[145%]">
                {t(`services.${key}.text`)}
              </Text>
              <Text size="base" color="grey" className="mt-auto leading-[145%]">
                {t(`services.${key}.result`)}
              </Text>
            </div>
            <div className="flex flex-1 flex-col gap-[15px]">
              <Text size="base" weight={500}>
                {t(`services.${key}.listTitle`)}
              </Text>
              <div className="flex gap-10 max-md:flex-col max-md:gap-2">
                <ul className="flex-1">
                  {items.slice(0, mid).map(item => (
                    <li key={item}>
                      <Text size="base" color="grey" className="leading-[28px]">
                        • {item}
                      </Text>
                    </li>
                  ))}
                </ul>
                <ul className="flex-1">
                  {items.slice(mid).map(item => (
                    <li key={item}>
                      <Text size="base" color="grey" className="leading-[28px]">
                        • {item}
                      </Text>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};
