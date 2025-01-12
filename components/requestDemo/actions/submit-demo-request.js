'use server'

import { createTransport } from 'nodemailer'
import { render } from '@react-email/render'
import { AdminNotificationEmail } from '../emails/admin-notification'
import { UserConfirmationEmail } from '../emails/user-confirmation'
import { writeFile, readFile } from 'fs/promises'
import { join } from 'path'
const transporter = createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

export async function submitDemoRequest(data) {
  try {
    // Store the request
    const dbPath = join(process.cwd(), 'data', 'demo-requests.json')
    let requests = []

    try {
      const content = await readFile(dbPath, 'utf-8')
      requests = JSON.parse(content)
    } catch (error) {
      // File doesn't exist yet, that's ok
    }

    const newRequest = {
      ...data,
      timestamp: new Date().toISOString(),
    }

    requests.push(newRequest)
    await writeFile(dbPath, JSON.stringify(requests, null, 2))

    // Send admin notification
    const adminHtml = render(AdminNotificationEmail(data))
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Demo Request',
      html: adminHtml,
    })

    // Send user confirmation
    const userHtml = render(UserConfirmationEmail({
      firstName: data.firstName,
      preferredTime: data.preferredTime,
    }))
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: data.email,
      subject: 'Demo Request Confirmed',
      html: userHtml,
    })

    return { success: true }
  } catch (error) {
    console.error('Failed to process demo request:', error)
    return { success: false, error: 'Failed to process your request. Please try again.' }
  }
}