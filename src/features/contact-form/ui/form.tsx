'use client';

import { useEffect } from 'react';
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

  useEffect(() => {
    registerContent({
      content: <ThankYou onClose={() => setIsOpen(false)} />,
    });
    setIsOpen(true);
  }, [setIsOpen, registerContent]);

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
      reset();
      registerContent({
        content: <ThankYou onClose={() => setIsOpen(false)} />,
      });
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
                label="First Name:"
                placeholder="Enter your first name"
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
                label="Last Name:"
                placeholder="Enter your last name"
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
                label="Email:"
                type="email"
                placeholder="Enter your email"
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
                label="Phone:"
                placeholder="Enter your phone"
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
                label="Company Name:"
                placeholder="Enter your company name"
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
                label="Project Type:"
                placeholder="Choose your project type"
                values={[
                  { label: 'Web Hosting', value: 'Web Hosting' },
                  { label: 'Web Development', value: 'Web Development' },
                  { label: 'Custom Solutions', value: 'Custom Solutions' },
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
                label="Budget:"
                placeholder="Choose your budget"
                values={[
                  { label: '€500 - €2,000', value: '€500 - €2,000' },
                  { label: '€2,001 - €5,000', value: '€2,001 - €5,000' },
                  { label: '€5,001 - €10,000', value: '€5,001 - €10,000' },
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
                label="Timeline:"
                placeholder="Select your timeline"
                values={[
                  { label: 'Short Term (1-3 months)', value: '1-3 months' },
                  { label: 'Medium Term (3-6 months)', value: '3-6 months' },
                  { label: 'Long Term (6+ months)', value: '6+ months' },
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
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        )}
      </Subscribe>
    </form>
  );
};
