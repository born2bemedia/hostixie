'use client';

import Image from 'next/image';

import { ContactForm } from '@/features/contact-form/ui/form';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

export const StartConversation = () => {
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
            Start a <br /> <span className="text-primary">Conversation</span>
          </Title>
          <Text
            color="black"
            weight={500}
            className="w-[500px] max-[1280px]:w-full"
          >
            Share your details below, and our digital experts will reach out
            soon to tailor the perfect hosting or development solution for you.
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
