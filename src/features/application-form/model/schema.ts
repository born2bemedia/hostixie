import { v } from '@/shared/lib/forms';

export const applicationFormSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  email: v.pipe(
    v.string(),
    v.minLength(1, 'Email is required'),
    v.email('Invalid email address'),
  ),
  linkedinProfile: v.pipe(v.string()),
  coverLetter: v.union([
    v.undefined(),
    v.pipe(
      v.file(),
      v.mimeType(
        [
          'application/pdf',
          'application/msword',
          'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        ],
        'Cover letter must be PDF, DOC, or DOCX format',
      ),
    ),
  ]),
  position: v.pipe(v.string(), v.minLength(1, 'Position is required')),
  resume: v.pipe(
    v.union([v.file(), v.undefined()]),
    v.check(value => value instanceof File, 'Resume is required'),
    v.transform(value => value as File),
    v.mimeType(['application/pdf'], 'Resume must be in PDF format'),
  ),
  message: v.pipe(v.string()),
});

export type ApplicationFormSchema = v.InferOutput<typeof applicationFormSchema>;
