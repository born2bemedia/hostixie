'use client';

import type { ReactNode } from 'react';
import { useTranslations } from 'next-intl';

import { ApplicationForm } from '@/features/application-form/ui/form';

import { Link } from '@/i18n/navigation';

import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { Title } from '@/shared/ui/kit/title';

const getJobs = (t: ReturnType<typeof useTranslations>) => [
  {
    type: t('items.0.type', { fallback: '(Remote - Full Time)' }),
    name: t('items.0.name', { fallback: 'Frontend Developer' }),
    description: (
      <>
        {t('items.0.description.0', {
          fallback:
            'As our Frontend Developer, you’ll turn Figma designs into pixel-perfect',
        })}
        <br />
        <br />
        {t('items.0.description.1', {
          fallback:
            'Your day-to-day includes writing clean, accessible markup, optimizing',
        })}
      </>
    ),
  },
  {
    type: t('items.1.type', { fallback: '(Remote - Full Time)' }),
    name: t('items.1.name', { fallback: 'Client Success Manager' }),
    description: (
      <>
        {t('items.1.description.0', {
          fallback:
            'In the Client Success Manager role, you’re the trusted advisor for our hosting and development clients. You’ll own the entire customer lifecycle, from custom onboarding walkthroughs and platform training to ticket triage and SLA-driven support. You’ll manage our Zendesk (or comparable) queue, escalate complex issues to engineering, and keep clients in the loop with clear status updates.',
        })}
        <br /> <br />
        {t('items.1.description.1', {
          fallback:
            'Beyond reactive support, you’ll drive proactive account reviews to identify upsell opportunities, capture feedback for product enhancements, and maintain our self-service knowledge base. Exceptional written and verbal communication skills, strong organizational habits, and a genuine desire to build lasting client relationships are key to thriving in this position.',
        })}
      </>
    ),
  },
  {
    type: t('items.2.type', { fallback: '(Remote - Part Time)' }),
    name: t('items.2.name', { fallback: 'Hosting Infrastructure Engineer' }),
    description: (
      <>
        {t('items.2.description.0', {
          fallback:
            'Our Hosting Infrastructure Engineer ensures that every website we host stays fast, secure, and online. You will architect and maintain Linux servers — tuning NGINX and Apache configurations, automating deployments with Docker or similar tools, and setting up monitoring and alerting for uptime and performance.',
        })}
        <br />
        <br />
        {t('items.2.description.1', {
          fallback:
            'You’ll own the security stack for WordPress environments, implementing hardening practices, automated malware scans, and regular patch management. When incidents occur, you’ll lead root-cause analysis and implement fixes in source-controlled scripts. This part-time role is perfect if you have deep Linux sysadmin skills, hands-on experience with containerization or IaC (Terraform/Ansible), and a proven track record of keeping high-traffic sites humming under pressure.',
        })}
      </>
    ),
  },
];

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
              {t('title.0', { fallback: 'Current' })} <br />
              {t('title.1', { fallback: 'Openings' })}
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
              {t('subtitle', {
                fallback:
                  'If you don’t see an open role that fits, feel free to reach out —',
              })}
            </Text>
            <Link href="/contact">
              <Button variant="primary">
                {t('button', { fallback: 'Contact Us' })}
              </Button>
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
}: {
  index: number;
  type: string;
  name: string;
  description: ReactNode;
  onApply: () => void;
}) => {
  const t = useTranslations('careers.jobs');

  return (
    <article className="flex gap-10 rounded-xl border border-[#A4A189] p-6 max-lg:flex-col">
      <span className="bg-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl">
        <Text size="sm" weight={500} color="black">
          {++index}
        </Text>
      </span>
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
            {t('applyNow', { fallback: 'Apply Now' })}
          </Button>
          <Button variant="outline">
            {t('showMore', { fallback: 'Show more' })}
          </Button>
        </section>
      </section>
    </article>
  );
};
