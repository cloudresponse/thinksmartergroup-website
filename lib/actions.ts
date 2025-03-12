'use server';

import { Resend } from 'resend';
import ContactFormEmail from '@/components/email/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
  name: string;
  email: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing RESEND_API_KEY environment variable');
  }

  if (!process.env.CONTACT_EMAIL) {
    throw new Error('Missing CONTACT_EMAIL environment variable');
  }

  try {
    const data = await resend.emails.send({
      from: 'Think Smarter Group <hello@thinksmartergroup.com>',
      to: [process.env.CONTACT_EMAIL],
      subject: `New Contact Form Submission from ${formData.name}`,
      react: ContactFormEmail(formData),
    });

    if (data.error) {
      throw new Error(data.error.message);
    }

    return { success: true };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }
    throw new Error('Failed to send email');
  }
} 