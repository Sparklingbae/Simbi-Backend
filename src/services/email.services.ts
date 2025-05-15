import nodemailer from 'nodemailer';
import {compileTemplate} from '../utils/emailTemplateEng';
import dotenv from 'dotenv';
import axios from 'axios';



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

// Function to send template with bravo

export const sendTemplateEmailBravo = async <T extends Record<string, any>>(
  to: string,
  templateName: string,
  templateData: T,
  subject: string
): Promise<void> => {
  try {
    const html = compileTemplate(templateName, templateData);
    await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Simbi AI Support', email: process.env.BREVO_EMAIL_USER},
        to: [{ email: to }],
        subject: subject,
        htmlContent: html
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
    console.log('Template email sent successfully!');
  } catch (error) {
    console.error('Error sending template email:', error);
    throw error;
  }
};


// resuable function to send emails with template
export const sendTemplateEmail = async <T extends Record<string, any>>(
  to: string,
  templateName: string,
  templateData: T,
  subject: string
): Promise<void> => {
  try {
    const html = compileTemplate(templateName, templateData);
    await transporter.sendMail({
      from: `"Simbi Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    });
    console.log('Template email sent successfully!');
  } catch (error) {
    console.error('Error sending template email:', error);
    throw error;
  }
};


// Function to send a study plan created email
export const sendStudyPlanCreatedEmail = async (
  to: string,
  name: string,
  studyPlan: string,
) => {
  await sendTemplateEmailBravo(
    to=to, 
    'studyPlanMail',
    {
    name,
    studyPlan,
    },
    'Your Study Plan is Ready!'
  );
}


// send user signup email using Brevo
export const sendUserSignupEmail= async (to: string, name: string) => {
  const html = compileTemplate('welcomeMail', {
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

  console.log("application brevo api key", process.env.BREVO_API_KEY);

  await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name: 'Simbi AI Support', email: process.env.BREVO_EMAIL_USER},
        to: [{ email: to }],
        subject: "Welcome to Simbi!",
        htmlContent: html
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
};


// Function to send a welcome email
export const sendWelcomeEmail = async (to: string, name: string) => {
  const html = compileTemplate('welcomeMail', {
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