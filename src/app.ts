import express, { Application, Request, Response, NextFunction } from "express";
import cors from "cors";
import { corsConfig } from "./config/cors";
import morgan from "./utils/logger";
import { NotFoundError } from "./utils/errorClasses";
import prisma from "./database/db";
import { errorHandler } from "./utils/errorMiddleware";

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

// gllobal error handling
app.use(errorHandler);
export default app;
