'use server'

import { Resend } from 'resend'

const resend = new Resend("re_fcJpgFz5_KUcb9E4ppzJxibyhURKRrti8")

export async function sendContactEmail(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const phone = formData.get('phone') as string
  const eventDetails = formData.get('eventDetails') as string
  const message = formData.get('message') as string

  await resend.emails.send({
    from: "MakeupByCarey <info@makeupbycarey.com>", 
    to: "info.makeupbycarey@gmail.com",
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    html: `
      <div>
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Event:</strong> ${eventDetails}</p>
        <p><strong>Message:</strong> ${message}</p>
      </div>
    `
  })
}
