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
          title={t('additionalInfo.title', {
            fallback: 'Additional Information:',
          })}
          text={t('additionalInfo.text', {
            fallback:
              'What specific features or functionalities do you require? (e.g., e-commerce, custom design, SEO, etc.)',
          })}
        >
          <Field name="additionalInfo">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('additionalInfo.placeholder', {
                  fallback: 'Enter specific features',
                })}
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
          title={t('preferredTechnology.title', {
            fallback: 'Preferred Technology:',
          })}
          text={t('preferredTechnology.text', {
            fallback:
              'If you have any preferences for your website’s platform (WordPress, Shopify, custom build, etc.), let us know!',
          })}
        >
          <Field name="preferredTechnology">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('preferredTechnology.placeholder', {
                  fallback: 'Enter preferred technology',
                })}
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
          title={t('currentWebsite.title', {
            fallback: 'Current Website (If Any):',
          })}
          text={t('currentWebsite.text', {
            fallback:
              'Please enter your website URL, if you have one, so we can better understand your current digital presence.',
          })}
        >
          <Field name="currentWebsite">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('currentWebsite.placeholder', {
                  fallback: 'Enter your current website',
                })}
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
          title={t('designInspiration.title', {
            fallback: 'Design Inspiration:',
          })}
          text={t('designInspiration.text', {
            fallback:
              'Do you have any design inspirations or websites you like? Please share reference links.',
          })}
        >
          <Field name="designInspiration">
            {field => (
              <TextArea
                name={field.name}
                placeholder={t('designInspiration.placeholder', {
                  fallback: 'Provide reference links',
                })}
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
          {t('cancel', { fallback: 'Cancel' })}
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
              {!isSubmitting
                ? t('submit', { fallback: 'Submit Form' })
                : t('submitting', { fallback: 'Submitting...' })}
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
