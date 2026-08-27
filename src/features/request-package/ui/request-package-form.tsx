'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { useForm } from '@/shared/lib/forms';
import { FormColumn } from '@/shared/ui/components/form-column';
import { Button } from '@/shared/ui/kit/button';
import { PhoneField } from '@/shared/ui/kit/phone-field';
import { Select } from '@/shared/ui/kit/select';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';
import { TextField } from '@/shared/ui/kit/text-field';
import { Title } from '@/shared/ui/kit/title';

import { sendRequestPackage } from '../api/send-request-package';
import { requestPackageSchema } from '../model/schema';

export const RequestPackageForm = ({
  title,
  price,
  onCancel,
}: {
  title: string;
  price: string;
  onCancel: () => void;
}) => {
  const [isSuccess, setIsSuccess] = useState(false);

  const t = useTranslations('requestPackageForm');

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
      const { success } = await sendRequestPackage({
        ...data.value,
        serviceName: title,
        price,
      });

      if (success) {
        setIsSuccess(true);
      }
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
      <section className="flex items-stretch gap-5 max-lg:flex-col">
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
                type="email"
                label={t('email.label')}
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
        <div className="flex w-full flex-col gap-5">
          <Field name="timeline">
            {field => (
              <Select
                label={t('timeline.label')}
                placeholder={t('timeline.placeholder')}
                values={[
                  {
                    label: t('timelineValues.0'),
                    value: '1-3 months',
                  },
                  {
                    label: t('timelineValues.1'),
                    value: '3-6 months',
                  },
                  {
                    label: t('timelineValues.2'),
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
          <Field name="message">
            {field => (
              <TextArea
                name={field.name}
                label={t('message.label')}
                placeholder={t('message.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                className="min-h-[242px] flex-1 max-lg:min-h-[160px]"
              />
            )}
          </Field>
        </div>
      </section>
      <section className="flex items-center justify-between gap-2 max-md:flex-col-reverse max-md:items-stretch">
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
    <section className="relative flex min-h-[400px] flex-col justify-end gap-10 px-20 pt-10 pb-10 max-md:min-h-0 max-md:px-4">
      <Image
        className="absolute top-0 left-0 z-0 size-[743px] max-w-none -translate-x-[22px] -translate-y-[276px] opacity-50"
        src="/images/thanks.svg"
        alt=""
        width={743}
        height={743}
        unoptimized
        aria-hidden
      />
      <div className="relative z-10 flex flex-col gap-2">
        <Title
          as="h3"
          size="5xl"
          className="max-md:text-[45px]"
          color="black"
          weight={500}
        >
          {t('thankYou')}
        </Title>
        <Text size="xl" color="black" weight={500}>
          {t('thankYouDescription')}
        </Text>
      </div>
      <Button
        variant="flat"
        size="lg"
        onClick={onCloseHandle}
        className="relative z-10 ml-auto font-bold max-md:w-full max-md:justify-center"
      >
        {t('close')}
      </Button>
    </section>
  );
};
