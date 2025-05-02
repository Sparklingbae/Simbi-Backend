import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { corsConfig } from "./config/cors";
import morgan from "./utils/logger";
import { NotFoundError } from "./utils/errorClasses";
import prisma from "./database/db";
import { errorHandler } from "./utils/errorMiddleware";
import { sendEmail } from './services/emailService';
import { createNotification, getUnreadNotifications, markNotificationAsRead } from './services/notificationService';

const app: Application = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors(corsConfig));
//used this for loggging request
app.use(morgan("[ :date ] :coloured-method :url :status :response-time ms"));

//check server health
app.get("/", (req, res) => {
  res
    .status(200)
    .json({ status: "success", message: "Welcome to Simbi-Backend" });
});

//added this to test prisma
//to be removed
app.get("/user/:name/:email", async (req, res) => {
   const user = await prisma.user.create({
        data: {
            name: req.params.name,
            email: req.params.email
        }
    })
    res.status(201).json(user)
})

//catches all none existent route
app.all('*"catch_all"', (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError(`Cannot find ${req.originalUrl} on this server`));
});

app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  //if (!to || !subject || !text) {
    //return res.status(400).json({ message: 'Missing required fields' });
  //}

  try {
    await sendEmail(to, subject, text);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
});

app.post('/notifications', async (req, res) => {
  const { userId, message, type } = req.body;
  try {
    const notification = await createNotification(userId, message, type);
    res.status(201).json(notification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create notification' });
  }
});

// Get all unread notifications for a user
app.get('/notifications/:userId', async (req, res) => {
  const userId = parseInt(req.params.userId);
  try {
    const notifications = await getUnreadNotifications(userId);
    res.json(notifications);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch notifications' });
  }
});

// Mark a notification as read
app.patch('/notifications/:id/read', async (req, res) => {
  const notificationId = parseInt(req.params.id);
  try {
    const updatedNotification = await markNotificationAsRead(notificationId);
    res.json(updatedNotification);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to mark notification as read' });
  }
});

// gllobal error handling
app.use(errorHandler);
export default app;