import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import AdminNotificationEmail from '@/components/emails/admin-notification';
import UserConfirmationEmail from '@/components/emails/user-confirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, email, phone, budget, preferredTime } = body;

    // Send admin notification
    await resend.emails.send({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Demo Request',
      react: AdminNotificationEmail({
        firstName,
        email,
        phone,
        budget,
        preferredTime,
      }),
    });

    // Send user confirmation
    await resend.emails.send({
      from: process.env.SMTP_FROM,
      to: email,
      subject: 'Demo Request Confirmed',
      react: UserConfirmationEmail({
        firstName,
        preferredTime,
      }),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to process demo request:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to process your request' },
      { status: 500 },
    );
  }
}
