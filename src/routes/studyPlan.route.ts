import { Router } from "express";

import { createStudyPlan } from "../controllers/studyPlan.controller";
import { authMiddleware } from "../middlewares/authentication.middlewares";


const router = Router();

router.post("/", authMiddleware,createStudyPlan);


export default router;