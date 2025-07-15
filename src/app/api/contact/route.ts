import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { firstName, lastName, email, subject, message } = body;

    const fullMessage = `
      Name: ${firstName} ${lastName}\n
      Email: ${email}\n
      Subject: ${subject}\n
      Message: ${message}
    `;

    const data = await resend.emails.send({
      from: 'nickfarrell.ca/contact <noreply@resend.dev>', // customize
      to: ['nickfarrell400@gmail.com'],
      subject: `${subject}`,
      text: fullMessage,
    });
    console.log(data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}