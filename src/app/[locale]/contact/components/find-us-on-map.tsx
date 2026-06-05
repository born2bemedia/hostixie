'use client';

import type { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

import { cn } from '@/shared/lib/utils/cn';
import { SocialNetworks } from '@/shared/ui/components/social-networks';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const EMAIL = 'info@hostixie.com';

const REGISTERED_ADDRESS =
  'Bucharest District 3, Str. Mihai Bravu Nr. 255, Basement, Module S 029, București, Romania';

const MAP_EMBED_URL =
  'https://www.google.com/maps?q=Bucharest%20District%203%2C%20Str.%20Mihai%20Bravu%20Nr.%20255%2C%20Basement%2C%20Module%20S%20029%2C%20Bucure%C8%99ti%2C%20Romania&output=embed';

export const FindUsOnMap = () => {
  const t = useTranslations('contact.findUsOnMap');

  return (
    <section className="bg-[#FFF4E1] py-10">
      <div className="container flex flex-col gap-10">
        <div className="flex flex-col gap-12">
          <div className="h-1 w-full bg-[#A4A189] opacity-40" />
          <Title
            size="5xl"
            color="black"
            weight={500}
            className="max-md:text-[24px]"
          >
            {t('title', { fallback: 'Find Us on the Map' })}
          </Title>
        </div>

        <div className="flex gap-5 max-md:flex-col">
          <div className="flex w-full max-w-106 flex-col space-y-5">
            <Card className="max-md:w-full">
              <CardText
                label={t('email.label', { fallback: 'Get in Touch' })}
                value={
                  <Link
                    href={`mailto:${EMAIL}`}
                    className="transition hover:opacity-70"
                  >
                    {EMAIL}
                  </Link>
                }
              />
            </Card>
            <Card className="grow">
              <Text size="xl" color="black" weight={700} className="mb-2">
                Stay Connected
              </Text>
              <Text
                size="base"
                color="black"
                weight={500}
                className="mb-4 opacity-30"
              >
                Follow us on social media:
              </Text>

              <SocialNetworks
                className="gap-2.5"
                linkClassName="h-15 flex items-center justify-center rounded-sm bg-black/10 grow"
              />
            </Card>
          </div>

          <Card className="flex flex-col gap-5 max-md:w-full">
            <CardText
              label={t('address.label', { fallback: 'Registered address:' })}
              value={REGISTERED_ADDRESS}
            />
            <div className="rounded-[4px] bg-black/10 p-5">
              <div className="h-[300px] w-full overflow-hidden bg-white">
                <iframe
                  title={t('mapTitle', {
                    fallback: 'Hostixie registered office location',
                  })}
                  src={MAP_EMBED_URL}
                  className="h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

const Card = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cn('rounded-[4px] bg-black/10 px-10 py-5', className)}>
    {children}
  </div>
);

const CardText = ({ label, value }: { label: string; value: ReactNode }) => (
  <div className="flex flex-col gap-2 tracking-[-0.48px]">
    <Text size="base" color="black" weight={500} className="opacity-30">
      {label}
    </Text>
    <Text size="xl" color="black" weight={500} className="leading-[1.2]">
      {value}
    </Text>
  </div>
);
