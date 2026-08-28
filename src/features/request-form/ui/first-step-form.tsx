'use client';

import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Select } from '@/shared/ui/kit/select';
import { TextField } from '@/shared/ui/kit/text-field';

import type { FirstStepFormSchema } from '../model/schema';
import { firstStepFormSchema } from '../model/schema';
import { FormHeader } from './form-header';

const PROJECT_TYPE_VALUES = [
  'Advertising Services',
  'Marketing & Communications',
  'Media Planning & Placement',
  'Market Research',
  'PR & Communications',
  'Business & Marketing Consulting',
  'Graphic Design & Visual Communications',
  'Custom Solutions',
] as const;

const BUDGET_VALUES = [
  '€500 - €2,000',
  '€2,001 - €5,000',
  '€5,001 - €10,000',
  'To Be Discussed',
] as const;

const TIMELINE_VALUES = [
  '1-3 months',
  '3-6 months',
  '6+ months',
  'ongoing',
] as const;

export const FirstStepForm = ({
  onSubmit,
}: {
  onSubmit: (args: FirstStepFormSchema) => void;
}) => {
  const { setIsOpen } = useDialogStore();

  const t = useTranslations('requestForm.firstStep');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      projectType: '',
      budget: '',
      timeline: '',
    },
    validators: {
      onSubmit: firstStepFormSchema,
    },
    onSubmit: async data => {
      onSubmit(data.value);
    },
  });

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-10"
    >
      <FormHeader />
      <section className="flex gap-5 max-md:flex-col">
        <FormColumn>
          <Field name="firstName">
            {field => (
              <TextField
                name={field.name}
                label={t('firstName.label')}
                placeholder={t('firstName.placeholder')}
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
          <Field name="lastName">
            {field => (
              <TextField
                name={field.name}
                label={t('lastName.label')}
                placeholder={t('lastName.placeholder')}
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
          <Field name="phone">
            {field => (
              <PhoneField
                name={field.name}
                label={t('phone.label')}
                placeholder={t('phone.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={value => field.handleChange(value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(err => err?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
        <FormColumn>
          <Field name="companyName">
            {field => (
              <TextField
                name={field.name}
                label={t('companyName.label')}
                placeholder={t('companyName.placeholder')}
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
          <Field name="projectType">
            {field => (
              <Select
                label={t('projectType.label')}
                placeholder={t('projectType.placeholder')}
                values={PROJECT_TYPE_VALUES.map((value, index) => ({
                  label: t(`projectTypeValues.${index}`, { fallback: value }),
                  value,
                }))}
                onSelect={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="budget">
            {field => (
              <Select
                label={t('budget.label')}
                placeholder={t('budget.placeholder')}
                values={BUDGET_VALUES.map((value, index) => ({
                  label: t(`budgetValues.${index}`, { fallback: value }),
                  value,
                }))}
                onSelect={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
          <Field name="timeline">
            {field => (
              <Select
                label={t('timeline.label')}
                placeholder={t('timeline.placeholder')}
                values={TIMELINE_VALUES.map((value, index) => ({
                  label: t(`timelineValues.${index}`, {
                    fallback:
                      index === 0
                        ? 'Short Term (1-3 months)'
                        : index === 1
                          ? 'Medium Term (3-6 months)'
                          : index === 2
                            ? 'Long Term (6+ months)'
                            : 'Ongoing Support',
                  }),
                  value,
                }))}
                onSelect={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
      </section>
      <section className="flex items-center justify-between gap-2 max-md:flex-col-reverse">
        <Button
          variant="flat"
          size="lg"
          onClick={() => setIsOpen(false)}
          className="font-bold max-md:w-full max-md:justify-center"
        >
          {t('cancel')}
        </Button>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              variant="flat"
              size="lg"
              type="submit"
              className="font-bold max-md:w-full max-md:justify-center"
              disabled={!canSubmit}
            >
              {!isSubmitting ? t('nextStep') : t('submitting')}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  );
};
