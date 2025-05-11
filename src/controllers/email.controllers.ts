import { Request, Response } from 'express';
import { sendEmail , sendWelcomeEmail } from '../services/email.services';

export const sendEmailController = async (req: Request, res: Response): Promise<void> => {
  const { to, subject, text } = req.body;

  if (!to || !subject || !text) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  try {
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email.' });
  }
};

// sendWelcomeEmailController
export const sendWelcomeEmailController = async (req: Request, res: Response): Promise<void> => {
  const { to, name } = req.body;

  if (!to || !name) {
    res.status(400).json({ error: 'All fields are required.' });
    return;
  }

  try {
    await sendWelcomeEmail(to, name);
    res.status(200).json({ message: 'Welcome email sent successfully!' });
  } catch (error) {
    console.error('Welcome email sending failed:', error);
    res.status(500).json({ error: 'Failed to send welcome email.' });
  }
}