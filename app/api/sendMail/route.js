import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'amdadul1807107@gmail.com',
        pass: 'ctyplxmrxbcoasox',
      }
    })

    const mailOption = {
      from: fromMail,
      to: "haque1807107@stud.kuet.ac.bd",
      // to: "bigbinservices@gmail.com",
      subject: `${name} is looking for you.`,
      html: `
        <h3>You have a new message from ${fromMail}</h3>
        <p>${message}</p>
        `
    }

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}