'use client';

import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Select } from '@/shared/ui/kit/select';
import { TextField } from '@/shared/ui/kit/text-field';

import { contactFormSchema } from '../model/schema';
import { ThankYou } from './thank-you';

export const ContactForm = () => {
  const { setIsOpen, registerContent } = useDialogStore();

  const t = useTranslations('contactForm');

  const { Field, Subscribe, handleSubmit, reset } = useForm({
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
      onSubmit: contactFormSchema,
    },
    onSubmit: async data => {
      console.log(data);
      registerContent({
        content: <ThankYou onClose={() => setIsOpen(false)} />,
      });
      reset();
      setIsOpen(true);
    },
  });

  return (
    <form
      className="flex w-full flex-col gap-10"
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
    >
      <div className="flex gap-5 max-[1280px]:flex-col">
        <FormColumn>
          <Field name="firstName">
            {field => (
              <TextField
                name={field.name}
                label={t('firstName.label', { fallback: 'First Name:' })}
                placeholder={t('firstName.placeholder', {
                  fallback: 'Enter your first name',
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
          <Field name="lastName">
            {field => (
              <TextField
                name={field.name}
                label={t('lastName.label', { fallback: 'Last Name:' })}
                placeholder={t('lastName.placeholder', {
                  fallback: 'Enter your last name',
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
          <Field name="phone">
            {field => (
              <PhoneField
                name={field.name}
                label={t('phone.label', { fallback: 'Phone:' })}
                placeholder={t('phone.placeholder', {
                  fallback: 'Enter your phone',
                })}
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
                label={t('companyName.label', { fallback: 'Company Name:' })}
                placeholder={t('companyName.placeholder', {
                  fallback: 'Enter your company name',
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
          <Field name="projectType">
            {field => (
              <Select
                label={t('projectType.label', { fallback: 'Project Type:' })}
                placeholder={t('projectType.placeholder', {
                  fallback: 'Choose your project type',
                })}
                values={[
                  {
                    label: t('projectTypeValues.0', {
                      fallback: 'Web Hosting',
                    }),
                    value: 'Web Hosting',
                  },
                  {
                    label: t('projectTypeValues.1', {
                      fallback: 'Web Development',
                    }),
                    value: 'Web Development',
                  },
                  {
                    label: t('projectTypeValues.2', {
                      fallback: 'Custom Solutions',
                    }),
                    value: 'Custom Solutions',
                  },
                ]}
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
                label={t('budget.label', { fallback: 'Budget:' })}
                placeholder={t('budget.placeholder', {
                  fallback: 'Choose your budget',
                })}
                values={[
                  {
                    label: t('budgetValues.0', { fallback: '€500 - €2,000' }),
                    value: '€500 - €2,000',
                  },
                  {
                    label: t('budgetValues.1', { fallback: '€2,001 - €5,000' }),
                    value: '€2,001 - €5,000',
                  },
                  {
                    label: t('budgetValues.2', {
                      fallback: '€5,001 - €10,000',
                    }),
                    value: '€5,001 - €10,000',
                  },
                ]}
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
                label={t('timeline.label', { fallback: 'Timeline:' })}
                placeholder={t('timeline.placeholder', {
                  fallback: 'Select your timeline',
                })}
                values={[
                  {
                    label: t('timelineValues.0', {
                      fallback: 'Short Term (1-3 months)',
                    }),
                    value: '1-3 months',
                  },
                  {
                    label: t('timelineValues.1', {
                      fallback: 'Medium Term (3-6 months)',
                    }),
                    value: '3-6 months',
                  },
                  {
                    label: t('timelineValues.2', {
                      fallback: 'Long Term (6+ months)',
                    }),
                    value: '6+ months',
                  },
                ]}
                onSelect={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
      </div>
      <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
        {([canSubmit, isSubmitting]) => (
          <Button
            variant="primary"
            size="lg"
            type="submit"
            disabled={!canSubmit}
          >
            {isSubmitting
              ? t('submitting', { fallback: 'Submitting...' })
              : t('submit', { fallback: 'Submit Application' })}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
