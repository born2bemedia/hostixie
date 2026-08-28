'use server';

import sgMail from '@sendgrid/mail';

import { contactFormBody } from '@/features/email-letters/contact-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { ContactFormSchema } from '../model/schema';

export async function sendContactForm({
  budget,
  companyName,
  email,
  firstName,
  lastName,
  phone,
  services,
  timeline,
}: ContactFormSchema) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const servicesList = services.join(', ');

    const msg = {
      to: 'info@hostixie.com',
      from: FROM_EMAIL,
      subject: `New Contact Request`,
      html: `
      <h2>New Contact Request</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Company / Brand Name:</strong> ${companyName}</p>
      <p><strong>Services Required:</strong> ${servicesList}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
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

    return { message: 'Contact request sent successfully.', success: true };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : 'Unknown error occurred';
    console.error('Error sending contact form:', errorMessage);
    return {
      message: 'Failed to send contact request.',
      error: errorMessage,
      success: false,
    };
  }
}
