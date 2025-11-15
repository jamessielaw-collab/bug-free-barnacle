'use server'

import { Resend } from 'resend'

// Hardcoded API key
const resend = new Resend("re_fcJpgFz5_KUcb9E4ppzJxibyhURKRrti8")

export async function sendContactEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const eventDetails = formData.get('eventDetails') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return {
      success: false,
      message: 'Please fill in all required fields.',
    }
  }

  try {
    await resend.emails.send({
      from: "MakeupByCarey <info@makeupbycarey.com>",   // <-- DIT MOET EEN VERIFIED EMAIL ZIJN
      to: "info.makeupbycarey@gmail.com",
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c5bbaf; border-bottom: 2px solid #c5bbaf; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>

          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
            ${eventDetails ? `<p><strong>Event Date & Location:</strong> ${eventDetails}</p>` : ''}
          </div>

          <div style="margin: 20px 0; padding: 15px; background-color: #f7f5f3; border-left: 4px solid #c5bbaf;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>

          <hr style="border-top: 1px solid #e5e5e5; margin: 20px 0;">

          <p style="color: #666; font-size: 12px;">
            This email was sent from the MakeupByCarey contact form.
          </p>
        </div>
      `,
    })

    return {
      success: true,
      message: 'Thank you for your inquiry! I will get back to you soon.',
    }

  } catch (error) {
    console.error('Failed to send email:', error)
    return {
      success: false,
      message: 'Failed to send your message. Please try emailing directly.',
    }
  }
}
