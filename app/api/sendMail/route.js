import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { fromMail, name, message } = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'michael.rustell25@gmail.com',
<<<<<<< HEAD
        // pass: 'ctyplxmrxbcoasox',
        pass: 'anzvgqtewpqnuvub',
=======
        pass: 'anzv gqte wpqn uvub',
>>>>>>> 1804b638ff111801bcf6553e6da1f0a1fc20051d
      }
    })

    const mailOption = {
      from: fromMail,
      // to: "haque1807107@stud.kuet.ac.bd",
<<<<<<< HEAD
      // 
      to: "michael.rustell25@gmail.com",
      subject: `${name} is looking for you.`,
=======
      to: "info@inframatic.ai",
      subject: `${name} Pioneer Program`,
>>>>>>> 1804b638ff111801bcf6553e6da1f0a1fc20051d
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
