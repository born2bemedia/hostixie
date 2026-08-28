'use client';

import { useState } from 'react';
import ReCaptcha from 'react-google-recaptcha';
import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { cn } from '@/shared/lib/utils/cn';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Text } from '@/shared/ui/kit/text';
import { TextField } from '@/shared/ui/kit/text-field';

import { sendContactForm } from '../api/send-contact-form';
import { contactFormSchema } from '../model/schema';
import { ThankYou } from './thank-you';

const BUDGET_VALUES = [
  '€500 - €2,000',
  '€2,001 - €5,000',
  '€5,001 - €10,000',
  '€10,000+',
  'To Be Discussed',
] as const;

const TIMELINE_VALUES = [
  '1-3 months',
  '3-6 months',
  '6+ months',
  'ongoing',
] as const;

const SERVICE_VALUES = [
  'Advertising Services',
  'Marketing & Business Consulting',
  'Media Planning & Placement',
  'Market Research',
  'PR & Communications',
  'Brand Communication',
  'Graphic Design & Visual Communications',
  'Custom Solutions',
] as const;

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? '';

export const ContactForm = () => {
  const [isCaptchaVerified, setIsCaptchaVerified] = useState(
    !RECAPTCHA_SITE_KEY,
  );

  const { setIsOpen, registerContent } = useDialogStore();

  const t = useTranslations('contactForm');

  const { Field, Subscribe, handleSubmit, reset } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      companyName: '',
      services: [] as string[],
      budget: '',
      timeline: '',
    },
    validators: {
      onSubmit: contactFormSchema,
    },
    onSubmit: async data => {
      const { success } = await sendContactForm(data.value);

      if (success) {
        registerContent({
          content: <ThankYou onClose={() => setIsOpen(false)} />,
        });
        reset();
        setIsOpen(true);
      }
    },
  });

  const handleCaptchaChange = (value: string | null) => {
    setIsCaptchaVerified(!!value);
  };

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
          <Field name="budget">
            {field => (
              <fieldset className="flex flex-col gap-1">
                <Text size="xs" color="muted" weight={500}>
                  {t('budget.label')}
                </Text>
                <div className="flex flex-col gap-1">
                  {BUDGET_VALUES.map((value, index) => {
                    const selected = field.state.value === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => field.handleChange(value)}
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
                          {t(`budgetValues.${index}`, { fallback: value })}
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
          <Field name="services">
            {field => (
              <fieldset className="flex flex-col gap-1">
                <Text size="xs" color="muted" weight={500}>
                  {t('services.label')}
                </Text>
                <div
                  className="flex min-h-[238px] flex-col justify-between gap-1 max-md:min-h-0"
                >
                  {SERVICE_VALUES.map((value, index) => {
                    const selected = field.state.value.includes(value);
                    return (
                      <button
                        key={value}
                        type="button"
                        role="checkbox"
                        aria-checked={selected}
                        onClick={() => {
                          const current = field.state.value;
                          field.handleChange(
                            selected
                              ? current.filter(item => item !== value)
                              : [...current, value],
                          );
                        }}
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
                          {t(`servicesValues.${index}`, { fallback: value })}
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
          <Field name="timeline">
            {field => (
              <fieldset className="flex flex-col gap-1">
                <Text size="xs" color="muted" weight={500}>
                  {t('timeline.label')}
                </Text>
                <div className="flex flex-col gap-1">
                  {TIMELINE_VALUES.map((value, index) => {
                    const selected = field.state.value === value;
                    return (
                      <button
                        key={value}
                        type="button"
                        role="radio"
                        aria-checked={selected}
                        onClick={() => field.handleChange(value)}
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
                          {t(`timelineValues.${index}`, {
                            fallback:
                              index === 0
                                ? 'Short Term (1-3 months)'
                                : index === 1
                                  ? 'Medium Term (3-6 months)'
                                  : index === 2
                                    ? 'Long Term (6+ months)'
                                    : 'Ongoing Support',
                          })}
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
        </FormColumn>
      </div>
      <div className="flex flex-col gap-4">
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={!canSubmit || !isCaptchaVerified}
              className="font-bold"
            >
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          )}
        </Subscribe>
        {RECAPTCHA_SITE_KEY && (
          <ReCaptcha
            sitekey={RECAPTCHA_SITE_KEY}
            onChange={handleCaptchaChange}
          />
        )}
      </div>
    </form>
  );
};
