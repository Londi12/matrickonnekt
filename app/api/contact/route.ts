import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Create a transporter for Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'matrickonnekt@gmail.com',
        pass: process.env.EMAIL_PASSWORD // You'll need to set this up in your environment variables
      }
    });

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: 'matrickonnekt@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `
    };    // Send notification email to admin
    await transporter.sendMail(mailOptions);

    // Send auto-response to user
    const autoResponseOptions = {
      from: '"Matrickonnekt Support" <matrickonnekt@gmail.com>',
      to: email,
      subject: 'Thank you for contacting Matrickonnekt',
      html: `
        <h2>Thank you for contacting Matrickonnekt</h2>
        <p>Dear ${name},</p>
        <p>We have received your message regarding "${subject}". Our team will review your inquiry and get back to you as soon as possible.</p>
        <p>For your reference, here's a copy of your message:</p>
        <blockquote style="margin: 10px 0; padding: 10px; border-left: 4px solid #0ea5e9; background-color: #f0f9ff;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>We typically respond within 24-48 hours during business days.</p>
        <p>Best regards,<br>The Matrickonnekt Team</p>
      `
    };

    await transporter.sendMail(autoResponseOptions);

    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to send email' 
    }, { status: 500 });
  }
}
