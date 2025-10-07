import { v } from '@/shared/lib/forms';

export const applicationFormSchema = v.object({
  fullName: v.pipe(v.string(), v.minLength(1, 'First name is required')),
  email: v.pipe(
    v.string(),
    v.minLength(1, 'Email is required'),
    v.email('Invalid email address'),
  ),
  linkedinProfile: v.pipe(v.string()),
  coverLetter: v.optional(
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
  ),
  position: v.pipe(v.string(), v.minLength(1, 'Position is required')),
  resume: v.pipe(
    v.file('Resume is required'),
    v.mimeType(['application/pdf'], 'Resume must be in PDF format'),
  ),
  message: v.pipe(v.string()),
});
