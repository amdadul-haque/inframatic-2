import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const formData = await request.json();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'michael.rustell25@gmail.com',
        pass: 'anzvgqtewpqnuvub',
      }
    })

    const generateEmailHtml = (data) => {
      const entries = Object.entries(data).map(([key, value]) => {
        return `<tr>
                  <td style="padding: 8px; border: 1px solid #ddd;">${key}</td>
                  <td style="padding: 8px; border: 1px solid #ddd;">${value}</td>
                </tr>`;
      }).join('');

      return `
        <h3>You have a new message from ${data.email}</h3>
        <table style="border-collapse: collapse; width: 100%; margin: 20px 0;">
          <thead>
            <tr>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;">Field</th>
              <th style="padding: 8px; border: 1px solid #ddd; background-color: #f2f2f2;">Value</th>
            </tr>
          </thead>
          <tbody>
            ${entries}
          </tbody>
        </table>
      `;
    };

    const mailOption = {
      from: formData.email,
      // to: "haque1807107@stud.kuet.ac.bd",
      to: "info@inframatic.ai",
      subject: `Pioneer Program`,
      html: generateEmailHtml(formData),
    }

    await transporter.sendMail(mailOption)
    return NextResponse.json({ message: "Email Sent Successfully" }, { status: 200 })
  } catch (error) {
    return NextResponse.json({ message: "Failed to Send Email" }, { status: 500 })
  }
}
