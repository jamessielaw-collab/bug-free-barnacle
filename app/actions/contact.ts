'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

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

  if (!process.env.RESEND_API_KEY) {
    return {
      success: false,
      message: 'Email service is not configured. Please contact the administrator.',
    }
  }

  const recipientEmail = process.env.CONTACT_EMAIL || 'info.makeupbycarey@gmail.com'

  try {
    await resend.emails.send({
      from: 'MakeupByCarey Contact Form <onboarding@resend.dev>',
      to: recipientEmail,
      replyTo: email,
      subject: `New Inquiry from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #c5bbaf; border-bottom: 2px solid #c5bbaf; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            ${phone ? `<p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>` : ''}
            ${eventDetails ? `<p style="margin: 10px 0;"><strong>Event Date & Location:</strong> ${eventDetails}</p>` : ''}
          </div>
          
          <div style="margin: 20px 0; padding: 15px; background-color: #f7f5f3; border-left: 4px solid #c5bbaf;">
            <p style="margin: 0;"><strong>Message:</strong></p>
            <p style="margin: 10px 0 0 0; white-space: pre-wrap;">${message}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
          
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
      message: 'Failed to send your message. Please try emailing directly at info.makeupbycarey@gmail.com',
    }
  }
}
