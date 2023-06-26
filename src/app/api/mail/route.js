import { NextResponse } from "next/server";
import { sendMail } from "@/lib/resend";
import { ContactEmail } from "@/emails/contact";

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  try {
    const data = await sendMail({
      from: "contact@cerimorse.com",
      to: "enterprise@mxrse.com",
      subject: subject,
      react: ContactEmail({ name, email, message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
