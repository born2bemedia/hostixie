import { v } from '@/shared/lib/forms';

export const firstStepFormSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  lastName: v.pipe(v.string(), v.minLength(1, 'Last name is required')),
  email: v.pipe(
    v.string(),
    v.minLength(1, 'Email is required'),
    v.email('Invalid email address'),
  ),
  phone: v.pipe(v.string(), v.minLength(5, 'Phone is required')),
  companyName: v.pipe(v.string(), v.minLength(1, 'Company name is required')),
  projectType: v.pipe(v.string(), v.minLength(1, 'Project type is required')),
  budget: v.pipe(v.string(), v.minLength(1, 'Budget is required')),
  timeline: v.pipe(v.string(), v.minLength(1, 'Timeline is required')),
});

export const secondStepFormSchema = v.object({
  additionalInfo: v.pipe(
    v.string(),
    v.minLength(1, 'Additional info is required'),
  ),
  preferredTechnology: v.pipe(
    v.string(),
    v.minLength(1, 'Preferred technology is required'),
  ),
  currentWebsite: v.pipe(v.string()),
  designInspiration: v.pipe(v.string()),
});

export type FirstStepFormSchema = v.InferOutput<typeof firstStepFormSchema>;
export type SecondStepFormSchema = v.InferOutput<typeof secondStepFormSchema>;
