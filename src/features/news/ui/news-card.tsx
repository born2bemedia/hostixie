'use client';

import Image from 'next/image';

import { Link } from '@/i18n/navigation';

import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

import type { News } from '../model/types';

export const NewsCard = ({
  href,
  imgUrl,
  date,
  title,
  description,
  summary,
  btnLabel,
}: News) => {
  return (
    <article className="flex flex-1 flex-col justify-between gap-10 rounded-xl border border-[#A4A189] p-6">
      <section className="flex flex-col gap-5">
        <Image
          className="h-[300px] w-full rounded-2xl object-cover"
          src={imgUrl}
          alt={title}
          width={382}
          height={300}
          unoptimized
        />
        <div className="flex flex-col gap-2">
          <Text color="primary" size="xs" weight={700}>
            {date}
          </Text>
          <Title color="black" size="xl" weight={700}>
            {title}
          </Title>
          <Text color="black" size="base" className="opacity-60">
            {description}
          </Text>
          {summary && (
            <Text color="black" size="base" weight={700} className="opacity-60">
              {summary}
            </Text>
          )}
        </div>
      </section>
      <Link
        href={href}
        className="flex h-[62px] w-full items-center justify-center rounded-[4px] bg-black/10"
      >
        <Text color="black" size="lg" weight={700}>
          {btnLabel}
        </Text>
      </Link>
    </article>
  );
};
