import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // TODO: Integrate with an email service (Resend, SendGrid, etc.)
    // Example:
    // await resend.emails.send({
    //   from: 'onboarding@resend.dev',
    //   to: 'business@tarajconsulting.com',
    //   subject: 'New Newsletter Subscriber',
    //   text: `New subscriber: ${email}`,
    // });

    console.log(`Newsletter subscription received for: ${email}`);

    return NextResponse.json({ message: "Subscription successful!" });
  } catch (error) {
    return NextResponse.json({ error: "Failed to subscribe" }, { status: 500 });
  }
}
