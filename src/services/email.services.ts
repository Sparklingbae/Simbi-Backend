import nodemailer from 'nodemailer';
import {compileTemplate} from '../utils/emailTemplateEngine';
import dotenv from 'dotenv';

dotenv.config();

// transporter using Gmail SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  logger: true,
  debug: true,
});



export const sendWelcomeEmail = async (to: string, name: string) => {
  const html = compileTemplate('welcome', {
    title: 'Welcome to Simbi!',
    companyName: 'Simbi',
    welcomeMessage: `Hello ${name}, we're thrilled to have you join our community of learners!`,
    noPresssureText: "No pressure, but we're pretty sure we're about to become your new favorite study companion.",
    excitedText: "We're super excited to help you achieve your learning goals",
    emoji: "🌟",
    heroImageAlt: "Welcome to Simbi",
    benefitsHeading: "Here's what makes Simbi special:",
    benefits: [
      {
        title: "Smart Learning:",
        description: "Personalized study paths tailored just for you"
      },
      {
        title: "Community Support:",
        description: "Connect with fellow learners and mentors"
      },
      {
        title: "24/7 Access:",
        description: "Learn at your own pace, anytime, anywhere"
      }
    ],
    ctaQuestion: "Ready to get started?",
    ctaSteps: [
      "Complete your profile",
      "Set your learning goals",
      "Join your first study session"
    ],
    callToAction: "Let's make learning amazing together!",
    teamSignature: "The Simbi Team",
    tagline: "Making learning fun and effective"
  });

  await transporter.sendMail({
    from: `"Simbi Support" <${process.env.EMAIL_USER}>`,
    to,
    subject: 'Welcome to Simbi!',
    html,
  });
};


// Function to send email
export const sendEmail = async (
  to: string,
  subject: string,
  text: string
): Promise<void> => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully!');
    console.log('Message ID:', info.messageId);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};