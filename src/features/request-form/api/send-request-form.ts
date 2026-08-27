'use server';

import sgMail from '@sendgrid/mail';

import { contactFormBody } from '@/features/email-letters/contact-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type {
  FirstStepFormSchema,
  SecondStepFormSchema,
} from '../model/schema';

export async function sendRequestForm({
  additionalInfo,
  budget,
  companyName,
  currentWebsite,
  designInspiration,
  email,
  firstName,
  lastName,
  phone,
  preferredTechnology,
  projectType,
  timeline,
}: FirstStepFormSchema & SecondStepFormSchema) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: 'info@hostixie.com',
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Request Form Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Project Name:</strong> ${companyName}</p>
      <p><strong>Service Required:</strong> ${projectType}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Project Goals:</strong> ${additionalInfo}</p>
      <p><strong>Target Audience:</strong> ${designInspiration}</p>
      <p><strong>Current Marketing & Communication Activities:</strong> ${currentWebsite}</p>
      <p><strong>Preferred Channels:</strong> ${preferredTechnology}</p>
    `,
    };

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Thank you for reaching out to Hostixie!',
      html: contactFormBody({ firstName }),
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
