import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, phone, company, services, budget, currency, message } = data;

    await resend.emails.send({
      from: "Xartech <onboarding@resend.dev>",
      to: "sarthak.xartech@gmail.com", // 🔥 your email here
      subject: "New Contact Form Submission",
      html: `
        <h2>New Project Inquiry 🚀</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Services:</strong> ${services.join(", ")}</p>
        <p><strong>Budget:</strong> ${currency} ${budget}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error) {
    return NextResponse.json({ success: false, error });
  }
}