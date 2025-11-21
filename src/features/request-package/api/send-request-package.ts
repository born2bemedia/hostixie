'use server';

import sgMail from '@sendgrid/mail';

import { requestFormBody } from '@/features/email-letters/request-form-body';

import { FROM_EMAIL, SENDGRID_API_KEY } from '@/shared/config/env';

import type { RequestPackageSchema } from '../model/schema';

export async function sendRequestPackage({
  email,
  firstName,
  lastName,
  message,
  phone,
  timeline,
  price,
  serviceName,
}: RequestPackageSchema & { serviceName: string; price: string }) {
  try {
    sgMail.setApiKey(SENDGRID_API_KEY);

    const msg = {
      to: 'dan.developer@born2be.media',
      from: FROM_EMAIL,
      subject: `New Request Package Submission`,
      html: `
      <h2>New Request Package Submission</h2>
      <p><strong>First Name:</strong> ${firstName}</p>
      <p><strong>Last Name:</strong> ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Timeline:</strong> ${timeline}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    const orderNumber = Date.now().toString();

    const userMsg = {
      to: email,
      from: FROM_EMAIL,
      subject: 'Your order has been received – Hostixie',
      html: requestFormBody({
        firstName,
        price,
        serviceName,
        orderNumber,
      }),
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
