'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { Dropdzone } from '@/shared/ui/kit/dropzone';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { applicationFormSchema } from '../model/schema';
import { ThankYou } from './thank-you';

export const ApplicationForm = ({ onCancel }: { onCancel: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('applicationForm');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      linkedinProfile: '',
      position: '',
      message: '',
      resume: undefined as File | undefined,
    },
    validators: {
      onSubmit: applicationFormSchema,
    },
    onSubmit: async data => {
      console.log(data);
      setIsSuccess(true);
    },
  });

  return !isSuccess ? (
    <form
      className="flex w-full flex-col gap-10 px-20 py-10 max-md:px-4"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <section className="flex items-end justify-between gap-10 max-md:flex-col max-md:items-start max-md:gap-2">
        <Title
          as="h4"
          size="5xl"
          color="black"
          weight={500}
          className="text-[45px] leading-[52.8px] tracking-[-0.48px] max-md:text-[32px] max-md:leading-[120%] max-md:tracking-[-0.48px]"
        >
          {t('title', { fallback: 'Application Form' })}
        </Title>
        <Text color="black" weight={500} className="w-[289px] max-md:w-full">
          {t('text.0', { fallback: 'Ready to join the team?' })} <br />
          {t('text.1', { fallback: 'Fill out the application below.' })}
        </Text>
      </section>
      <section className="flex gap-5 max-md:flex-col">
        <FormColumn>
          <Field name="fullName">
            {field => (
              <TextField
                name={field.name}
                label={t('fullName.label', { fallback: 'Full Name:' })}
                placeholder={t('fullName.placeholder', {
                  fallback: 'Enter your full name',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="email">
            {field => (
              <TextField
                name={field.name}
                label={t('email.label', { fallback: 'Email:' })}
                type="email"
                placeholder={t('email.placeholder', {
                  fallback: 'Enter your email',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="linkedinProfile">
            {field => (
              <TextField
                name={field.name}
                label={t('linkedinProfile.label', {
                  fallback: 'Linkedin Profile:',
                })}
                placeholder={t('linkedinProfile.placeholder', {
                  fallback:
                    'Share a link to your LinkedIn or other professional profile',
                })}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          {/* @ts-expect-error coverLetter field is not defined in schema */}
          <Field name="coverLetter">
            {field => (
              <Dropdzone
                name={field.name}
                label={t('coverLetter.label', {
                  fallback: 'Cover Letter (PDF, DOC/DOCX):',
                })}
                placeholder={t('coverLetter.placeholder', {
                  fallback: "Attach a short note about why you're a good fit",
                })}
                value={field.state.value as File | undefined}
                onDrop={file => field.handleChange(file ?? undefined)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
        <FormColumn>
          <Field name="position">
            {field => (
              <Select
                label={t('position.label', {
                  fallback: 'Position Applying For:',
                })}
                placeholder={t('position.placeholder', {
                  fallback: 'Choose your position',
                })}
                values={[
                  {
                    label: t('jobs.0', { fallback: 'Frontend Developer' }),
                    value: 'Frontend Developer',
                  },
                  {
                    label: t('jobs.1', { fallback: 'Client Success Manager' }),
                    value: 'Client Success Manager',
                  },
                  {
                    label: t('jobs.2', {
                      fallback: 'Hosting Infrastructure Engineer',
                    }),
                    value: 'Hosting Infrastructure Engineer',
                  },
                ]}
                onSelect={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="resume">
            {field => (
              <Dropdzone
                name={field.name}
                label={t('resume.label', {
                  fallback: 'Resume (PDF only):',
                })}
                placeholder={t('resume.placeholder', {
                  fallback: 'Upload your up-to-date resume',
                })}
                value={field.state.value ?? undefined}
                onDrop={file => field.handleChange(file ?? undefined)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="message">
            {field => (
              <TextArea
                name={field.name}
                label={t('message.label', {
                  fallback: 'Message:',
                })}
                placeholder={t('message.placeholder', {
                  fallback: 'Add any additional info you want to share',
                })}
                className="h-[148px]"
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
      </section>
      <section className="flex justify-between gap-2 max-md:flex-col-reverse">
        <Button
          variant="flat"
          size="lg"
          onClick={onCancel}
          className="font-bold max-md:w-full max-md:justify-center"
        >
          {t('cancel', { fallback: 'Cancel' })}
        </Button>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={!canSubmit}
              className="font-bold max-md:w-full max-md:justify-center"
            >
              {isSubmitting
                ? t('submitting', { fallback: 'Submitting...' })
                : t('submit', { fallback: 'Submit Application' })}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  ) : (
    <ThankYou onClose={onCancel} />
  );
};
