import { NextResponse } from "next/server";
import { sendMail } from "@/lib/resend";

export async function POST(request) {
  try {
    const data = await sendMail({
      from: "",
      to: "",
      subject: "",
      react: <></>,
    });

    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
