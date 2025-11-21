'use server';

import sgMail from '@sendgrid/mail';

import { contactFormBody } from '@/features/email-letters/contact-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ApplicationFormSchema } from '../model/schema';

const toBase64 = async (file: File) => {
  const buffer = Buffer.from(await file.arrayBuffer());
  return buffer.toString('base64');
};

export async function sendApplicationForm({
  email,
  fullName,
  linkedinProfile,
  message,
  position,
  resume,
  coverLetter,
}: ApplicationFormSchema) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const attachments = [];

    if (resume) {
      attachments.push({
        filename: resume.name || 'resume.pdf',
        content: await toBase64(resume),
        type: resume.type || 'application/pdf',
        disposition: 'attachment',
      });
    }

    if (coverLetter) {
      attachments.push({
        filename: coverLetter.name || 'cover-letter.pdf',
        content: await toBase64(coverLetter),
        type: coverLetter.type || 'application/pdf',
        disposition: 'attachment',
      });
    }

    const msg = {
      to: 'info@hostixie.com',
      from: FROM_EMAIL,
      subject: `New Application Form Submission`,
      html: `
        <h2>New Application Form Submission</h2>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>LinkedIn Profile:</strong> ${linkedinProfile}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
      attachments,
    };

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Thank you for reaching out to Hostixie!',
      html: contactFormBody({ firstName: fullName }),
    };

    await sgMail.send(msg);
    await sgMail.send(userMsg);

    return { message: 'Fund access request sent successfully.', success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending fund access request:', errorMessage);
    return {
      message: 'Failed to send fund access request.',
      error: errorMessage,
      success: false,
    };
  }
}
