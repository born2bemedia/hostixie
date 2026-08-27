'use client';

import { useTranslations } from 'next-intl';
import { useForm } from '@tanstack/react-form';

import { Button } from '@/shared/ui/kit/button';
import { useDialogStore } from '@/shared/ui/kit/dialog';
import { Text } from '@/shared/ui/kit/text';
import { TextArea } from '@/shared/ui/kit/text-area';

import {
  type SecondStepFormSchema,
  secondStepFormSchema,
} from '../model/schema';
import { FormHeader } from './form-header';

export const SecondStepForm = ({
  onSubmit,
}: {
  onSubmit: (args: SecondStepFormSchema) => void;
}) => {
  const { setIsOpen } = useDialogStore();

  const t = useTranslations('requestForm.secondStep');

  const { Field, Subscribe, handleSubmit } = useForm({
    defaultValues: {
      additionalInfo: '',
      preferredTechnology: '',
      currentWebsite: '',
      designInspiration: '',
    },
    validators: {
      onSubmit: secondStepFormSchema,
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
      <section className="flex flex-col gap-5">
        <FieldWrapper
          title={t('projectGoals.title')}
          text={t('projectGoals.text')}
        >
          <Field name="additionalInfo">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('projectGoals.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                className="h-[100px]"
              />
            )}
          </Field>
        </FieldWrapper>
        <FieldWrapper
          title={t('targetAudience.title')}
          text={t('targetAudience.text')}
        >
          <Field name="designInspiration">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('targetAudience.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                className="h-[100px]"
              />
            )}
          </Field>
        </FieldWrapper>
        <FieldWrapper
          title={t('currentActivities.title')}
          text={t('currentActivities.text')}
        >
          <Field name="currentWebsite">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('currentActivities.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                className="h-[100px]"
              />
            )}
          </Field>
        </FieldWrapper>
        <FieldWrapper
          title={t('preferredChannels.title')}
          text={t('preferredChannels.text')}
        >
          <Field name="preferredTechnology">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('preferredChannels.placeholder')}
                value={String(field.state.value)}
                onBlur={field.handleBlur}
                onChange={e => field.handleChange(e.target.value)}
                intent={field.state.meta.errors.length ? 'danger' : 'primary'}
                hint={field.state.meta.errors
                  .map(error => error?.message)
                  .join(', ')}
                className="h-[100px]"
              />
            )}
          </Field>
        </FieldWrapper>
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
              variant="primary"
              size="lg"
              type="submit"
              className="font-bold max-md:w-full max-md:justify-center"
              disabled={!canSubmit}
            >
              {!isSubmitting ? t('submit') : t('submitting')}
            </Button>
          )}
        </Subscribe>
      </section>
    </form>
  );
};

const FieldWrapper = ({
  children,
  title,
  text,
}: {
  title: string;
  text: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="flex w-full gap-5 max-md:flex-col">
      <FieldTextInfo title={title} text={text} />
      <div className="w-1/2 max-md:w-full">{children}</div>
    </div>
  );
};

const FieldTextInfo = ({ title, text }: { title: string; text: string }) => (
  <section className="flex w-1/2 flex-col gap-1 max-md:w-full">
    <Text color="black" weight={500}>
      {title}
    </Text>
    <Text color="black" weight={500} className="opacity-60">
      {text}
    </Text>
  </section>
);
