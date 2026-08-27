'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { cn } from '@/shared/lib/utils/cn';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { Dropdzone } from '@/shared/ui/kit/dropzone';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { sendApplicationForm } from '../api/send-application-form';
import { applicationFormSchema } from '../model/schema';
import { ThankYou } from './thank-you';

const POSITION_KEYS = ['0', '1', '2', '3', '4'] as const;

export const ApplicationForm = ({ onCancel }: { onCancel: () => void }) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('applicationForm');

  const positions = POSITION_KEYS.map(key => ({
    label: t(`jobs.${key}`),
    value: t(`jobs.${key}`),
  }));

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      linkedinProfile: '',
      position: '',
      message: '',
      resume: undefined as File | undefined,
      coverLetter: undefined as File | undefined,
    },
    validators: {
      onSubmit: applicationFormSchema,
    },
    onSubmit: async data => {
      const { success } = await sendApplicationForm({
        ...data.value,
        resume: data.value.resume as File,
        coverLetter: data.value.coverLetter,
      });

      if (success) {
        setIsSuccess(true);
      }
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
          {t('title')}
        </Title>
        <Text color="black" weight={500} className="w-[289px] max-md:w-full">
          {t('text.0')} <br />
          {t('text.1')}
        </Text>
      </section>

      <section className="flex flex-col gap-4">
        <section className="flex gap-5 max-md:flex-col">
          <FormColumn>
            <Field name="fullName">
              {field => (
                <TextField
                  name={field.name}
                  label={t('fullName.label')}
                  placeholder={t('fullName.placeholder')}
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
                  label={t('email.label')}
                  type="email"
                  placeholder={t('email.placeholder')}
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
                  label={t('linkedinProfile.label')}
                  placeholder={t('linkedinProfile.placeholder')}
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
            <Field name="coverLetter">
              {field => (
                <Dropdzone
                  name={field.name}
                  label={t('coverLetter.label')}
                  placeholder={t('coverLetter.placeholder')}
                  value={field.state.value as File | undefined}
                  onDrop={file => field.handleChange(file ?? undefined)}
                  hint={field.state.meta.errors
                    .map(error => error?.message)
                    .join(', ')}
                />
              )}
            </Field>
          </FormColumn>
          <div className="flex w-full flex-col gap-5">
            <Field name="resume">
              {field => (
                <Dropdzone
                  name={field.name}
                  label={t('resume.label')}
                  placeholder={t('resume.placeholder')}
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
                  label={t('message.label')}
                  placeholder={t('message.placeholder')}
                  className="min-h-[238px] flex-1 max-md:min-h-[160px]"
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
          </div>
        </section>

        <Field name="position">
          {field => (
            <fieldset className="flex flex-col gap-2">
              <Text size="xs" color="muted" weight={500}>
                {t('position.label')}
              </Text>
              <div className="flex flex-col gap-1">
                {positions.map(position => {
                  const selected = field.state.value === position.value;
                  return (
                    <button
                      key={position.value}
                      type="button"
                      role="radio"
                      aria-checked={selected}
                      onClick={() => field.handleChange(position.value)}
                      className="flex items-center gap-2 text-left"
                    >
                      <span
                        className={cn(
                          'size-6 shrink-0 rounded-md border border-[#A4A189]',
                          selected && 'bg-primary',
                        )}
                        aria-hidden
                      />
                      <Text size="sm" color="muted" weight={500}>
                        {position.label}
                      </Text>
                    </button>
                  );
                })}
              </div>
              {field.state.meta.errors.length > 0 && (
                <Text size="xs" color="danger">
                  {field.state.meta.errors
                    .map(error => error?.message)
                    .join(', ')}
                </Text>
              )}
            </fieldset>
          )}
        </Field>
      </section>

      <section className="flex justify-between gap-2 max-md:flex-col-reverse">
        <Button
          variant="flat"
          size="lg"
          onClick={onCancel}
          className="font-bold max-md:w-full max-md:justify-center"
        >
          {t('cancel')}
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
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  ) : (
    <ThankYou onClose={onCancel} />
  );
};
