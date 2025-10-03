'use client';

import { useState } from 'react';
import Image from 'next/image';

import { useForm } from '@/shared/lib/forms';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { requestPackageSchema } from '../model/schema';

export const RequestPackageForm = ({
  title,
  onCancel,
}: {
  title: string;
  onCancel: () => void;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      timeline: '',
      message: '',
    },
    validators: {
      onSubmit: requestPackageSchema,
    },
    onSubmit: async data => {
      console.log(data);
      setIsSuccess(true);
    },
  });

  const onCloseHandle = () => {
    setIsSuccess(false);
    onCancel();
  };

  return !isSuccess ? (
    <form
      onSubmit={e => {
        e.preventDefault();
        e.stopPropagation();
        handleSubmit().catch(console.error);
      }}
      className="flex flex-col gap-10 px-20 py-10 max-md:px-4"
    >
      <Title as="h4" size="5xl" color="black" weight={500}>
        {title}
      </Title>
      <section className="flex gap-5 max-lg:flex-col">
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
                type="email"
                label="Email:"
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
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={value => field.handleChange(value)}
                hint={field.state.meta.errors
                  .map(err => err?.message)
                  .join(', ')}
              />
            )}
          </Field>
        </FormColumn>
        <FormColumn>
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
          <Field name="message">
            {field => (
              <TextArea
                name={field.name}
                label="Message:"
                placeholder="Enter your message"
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
      <section className="flex items-center justify-between gap-2 max-md:flex-col-reverse max-md:items-start">
        <Button
          variant="flat"
          size="lg"
          onClick={onCancel}
          className="max-md:w-full max-md:justify-center"
        >
          Cancel
        </Button>
        <Subscribe selector={state => [state.canSubmit, state.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <Button
              variant="primary"
              size="lg"
              type="submit"
              disabled={!canSubmit}
              className="max-md:w-full max-md:justify-center"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  ) : (
    <section className="relative flex flex-col gap-10 px-20 py-10 max-md:px-4">
      <Image
        className="absolute top-0 left-0 z-0 opacity-90"
        src="/images/thanks.svg"
        alt="thanks"
        width={743}
        height={743}
        unoptimized
      />
      <div className="flex flex-col gap-2">
        <Title as="h3" size="5xl" color="black" weight={700}>
          Thank you!
        </Title>
        <Text size="xl" color="black" weight={500}>
          Your service package request has been successfully received. Our team
          is reviewing the details and will contact you shortly to discuss the
          next steps and how we can assist with your project.
        </Text>
      </div>
      <Button
        variant="flat"
        size="lg"
        onClick={onCloseHandle}
        className="ml-auto"
      >
        Close
      </Button>
    </section>
  );
};
