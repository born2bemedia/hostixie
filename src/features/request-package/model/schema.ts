import { v } from '@/shared/lib/forms';

export const requestPackageSchema = v.object({
  firstName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  lastName: v.pipe(v.string(), v.minLength(1, 'Last name is required')),
  email: v.pipe(
    v.string(),
    v.minLength(1, 'Email is required'),
    v.email('Invalid email address'),
  ),
  phone: v.pipe(v.string(), v.minLength(5, 'Phone is required')),
  timeline: v.pipe(v.string(), v.minLength(1, 'Timeline is required')),
  message: v.pipe(v.string()),
});
