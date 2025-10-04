'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { ContactForm } from '@/features/contact-form/ui/form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const StartConversation = () => {
  const t = useTranslations('contact.startConversation');

  return (
    <section className="bg-[#FFF4E1] py-10">
      <div className="container flex gap-10 max-[1280px]:flex-col">
        <section className="relative flex shrink-0 flex-col gap-5">
          <Title
            size="5xl"
            color="black"
            weight={500}
            className="max-md:text-[40px]"
          >
            {t('title.0', { fallback: 'Start a' })} <br />{' '}
            <span className="text-primary">
              {t('title.1', { fallback: 'Conversation' })}
            </span>
          </Title>
          <Text
            color="black"
            weight={500}
            className="w-[500px] max-[1280px]:w-full"
          >
            {t('text', {
              fallback:
                'Share your details below, and our digital experts will reach out',
            })}
          </Text>
          <Image
            className="absolute -bottom-20 -left-20 max-[1280px]:hidden"
            src="/images/contact/world.svg"
            alt="world"
            width={587}
            height={587}
            unoptimized
          />
        </section>
        <ContactForm />
      </div>
    </section>
  );
};
