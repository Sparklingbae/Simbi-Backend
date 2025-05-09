import express from "express";
import * as studyPlanController from "../controllers/studyPlan.controller";
import { authMiddleware } from "../middlewares/authentication.middlewares";

const router = express.Router();

/**
 * @route POST /api/study-plans/generate
 * @desc Generate a study plan using AI
 * @access Private
 */
router.post("/generate", authMiddleware, studyPlanController.generateStudyPlan);
router.get("/all", authMiddleware, studyPlanController.getAllStudyPlans);
router.get("/:planId", authMiddleware, studyPlanController.getStudyPlan);
router.delete("/:planId", authMiddleware, studyPlanController.deleteStudyPlan);
router.put("/:planId", authMiddleware, studyPlanController.updateStudyPlanStatus);

// route to get all milestones of a study plan
router.get("/:planId/milestones", authMiddleware, studyPlanController.getMilestonesByStudyPlanId);
// route to get all study sessions of a study plan
router.get("/:planId/sessions", authMiddleware, studyPlanController.getStudySessionsByStudyPlanId);

export default router;