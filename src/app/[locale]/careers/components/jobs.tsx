'use client';

import { type ReactNode, useState } from 'react';
import { useTranslations } from 'next-intl';

import { ApplicationForm } from '@/features/application-form/ui/form';

import { Link } from '@/i18n/navigation';

import { cn } from '@/shared/lib/utils/cn';
import { PlayIcon } from '@/shared/ui/icons/play';
import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const JOB_COUNTS = [
  { responsibilities: 12, requirements: 9 },
  { responsibilities: 8, requirements: 7 },
  { responsibilities: 8, requirements: 7 },
  { responsibilities: 8, requirements: 7 },
] as const;

const getJobs = (t: ReturnType<typeof useTranslations>) =>
  JOB_COUNTS.map((counts, index) => ({
    type: t(`items.${index}.type`),
    name: t(`items.${index}.name`),
    description: (
      <>
        {t(`items.${index}.description.0`)}
        <br />
        <br />
        {t(`items.${index}.description.1`)}
      </>
    ),
    responsibilities: Array.from({ length: counts.responsibilities }, (_, i) =>
      t(`items.${index}.responsibilities.${i}`),
    ),
    requirements: Array.from({ length: counts.requirements }, (_, i) =>
      t(`items.${index}.requirements.${i}`),
    ),
  }));

export const Jobs = () => {
  const t = useTranslations('careers.jobs');

  const { registerContent, setIsOpen } = useDialogStore();

  const onApplyHandle = () => {
    registerContent({
      content: <ApplicationForm onCancel={() => setIsOpen(false)} />,
    });
    setIsOpen(true);
  };

  const jobs = getJobs(t);

  return (
    <section className="py-20">
      <div className="relative container flex gap-10 max-lg:flex-col max-lg:gap-20">
        <section className="sticky top-5 flex h-fit w-1/2 flex-col gap-10 self-start max-lg:relative max-lg:top-0 max-lg:w-full">
          <div className="flex justify-between">
            <Title uppercase>
              {t('title.0')} <br />
              {t('title.1')}
            </Title>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="45"
              viewBox="0 0 32 45"
              fill="none"
            >
              <path
                d="M0 0.800049H26C27.3333 0.800049 30 2.00005 30 6.80005C30 11.6 30 32.8 30 42.8"
                stroke="white"
              />
              <circle
                cx="30"
                cy="42.3"
                r="2"
                transform="rotate(180 30 42.3)"
                fill="white"
              />
            </svg>
          </div>
          <div className="flex flex-col gap-2">
            <Text
              size="3xl"
              weight={500}
              className="leading-[120%] tracking-[-0.48px]"
            >
              {t('subtitle')}
            </Text>
            <Link href="/contact">
              <Button variant="primary">{t('button')}</Button>
            </Link>
          </div>
        </section>
        <section className="flex w-1/2 flex-col gap-4 max-lg:w-full">
          {jobs.map((job, i) => (
            <JobCard
              key={job.name}
              {...job}
              index={i}
              onApply={onApplyHandle}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

const JobCard = ({
  description,
  index,
  name,
  type,
  onApply,
  responsibilities,
  requirements,
}: {
  index: number;
  type: string;
  name: string;
  description: ReactNode;
  onApply: () => void;
  responsibilities: string[];
  requirements: string[];
}) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const t = useTranslations('careers.jobs');

  return (
    <article className="flex gap-10 rounded-xl border border-[#A4A189] p-6 max-lg:flex-col">
      <span className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
        <Text size="sm" weight={500} color="black">
          {index + 1}
        </Text>
      </span>
      <div className="flex flex-col gap-10">
        <section className="flex flex-col gap-5">
          <section className="flex flex-col gap-2">
            <Text size="xs" color="primary" weight={700}>
              {type}
            </Text>
            <Title
              as="h3"
              size="4xl"
              weight={700}
              className="max-md:text-[32px]"
              uppercase
            >
              {name}
            </Title>
            <Text size="base" color="grey">
              {description}
            </Text>
          </section>
          <section className="flex justify-between">
            <Button variant="primary" onClick={onApply}>
              {t('applyNow')}
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsShowMore(prev => !prev)}
            >
              {isShowMore ? t('showLess') : t('showMore')}
            </Button>
          </section>
        </section>
        <section
          className={cn(
            'flex flex-col gap-10 overflow-hidden transition-all duration-500 ease-in-out',
            isShowMore
              ? 'mt-4 max-h-[2500px] opacity-100'
              : 'mt-0 max-h-0 opacity-0',
          )}
        >
          <div className="flex flex-col gap-2">
            <Text size="xs" weight={700}>
              {t('responsibilities')}
            </Text>
            <ul className="flex flex-col gap-2">
              {responsibilities.map(responsibility => (
                <li key={responsibility} className="flex items-center gap-2.5">
                  <PlayIcon />
                  <Text size="base">{responsibility}</Text>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2">
            <Text size="xs" weight={700}>
              {t('requirements')}
            </Text>
            <ul className="flex flex-col gap-2">
              {requirements.map(requirement => (
                <li key={requirement} className="flex items-center gap-2.5">
                  <PlayIcon />
                  <Text size="base">{requirement}</Text>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </article>
  );
};
