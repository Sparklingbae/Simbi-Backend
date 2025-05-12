import { Request, Response, NextFunction } from "express";
import { CustomRequest } from "../interfaces/request.interfaces";
import * as studyPlanService from "../services/studyPlan.services";
import { StudyPlanInput } from "../interfaces/study-plan.interfaces";
import { getStudyPlanById } from "../models/studyPlan.models";

export async function generateStudyPlan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const studyPlanInput: StudyPlanInput = req.body;
        const userId = customReq.user.id;
        // Generate study plan using OpenAI
        const generatedPlan = await studyPlanService.generateStudyPlan(userId, studyPlanInput);

        if (generatedPlan) {
            res.status(200).json({
                status: "success",
                message: "Study plan generated successfully",
                data: generatedPlan
            });
            return;
        }

        next(new Error("Failed to generate study plan"));
    } catch (error) {
        console.error("Error in generateStudyPlan controller:", error);
        next(error);
    }
}

//get all study plans created by a user
export async function getAllStudyPlans(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }
        const userId = customReq.user.id;
        const studyPlans = await studyPlanService.getStudyPlans(userId);
        if (studyPlans) {
            res.status(200).json({
                status: "success",
                message: "Study plans retrieved successfully",
                data: studyPlans
            });
            return;
        }
        next(new Error("Failed to retrieve study plans"));
    } catch (error) {
        console.error("Error in getAllStudyPlans controller:", error);
        next(error);
    }
}



// this function is used to get the study plan a particular user study plan
export async function getStudyPlan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
     
        
        const planId = req.params.planId;
        if (!planId) {
            res.status(400).json({ success: false, message: "Plan ID is required" });
            return;
        }
        // Validate user is authenticated

        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const userId = customReq.user.id;
        const studyPlan = await studyPlanService.getStudyPlan(planId);

        if (studyPlan) {
            res.status(200).json({
                status: "success",
                message: "Study plan retrieved successfully",
                data: studyPlan
            });
            return;
        }

        next(new Error("Failed to retrieve study plan"));
    } catch (error) {
        console.error("Error in getStudyPlan controller:", error);
        next(error);
    }
}


// Update a study plan  status
export async function updateStudyPlanStatus(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const planId = req.params.planId;
        if (!planId) {
            res.status(400).json({ success: false, message: "Plan ID is required" });
            return;
        }
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const userId = customReq.user.id;
        const status = req.body.status;

        const updatedPlan = await studyPlanService.updateStudyPlanStatus(planId, status);

        if (updatedPlan) {
            res.status(200).json({
                status: "success",
                message: "Study plan status updated successfully",
                data: updatedPlan
            });
            return;
        }

        next(new Error("Failed to update study plan status"));
    } catch (error) {
        console.error("Error in updateStudyPlanStatus controller:", error);
        next(error);
    }
}

// Delete a study plan
export async function deleteStudyPlan(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const planId = req.params.planId;
        if (!planId) {
            res.status(400).json({ success: false, message: "Plan ID is required" });
            return;
        }
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const userId = customReq.user.id;

        await studyPlanService.deleteStudyPlan(planId);

        res.status(200).json({
            status: "success",
            message: "Study plan deleted successfully"
        });
    } catch (error) {
        console.error("Error in deleteStudyPlan controller:", error);
        next(error);
    }
}


// get a milestone by study plan id
export async function getMilestonesByStudyPlanId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const planId = req.params.planId;
        if (!planId) {
            res.status(400).json({ success: false, message: "Plan ID is required" });
            return;
        }
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const userId = customReq.user.id;

        const milestones = await studyPlanService.getMilestonesByStudyPlanId(planId);

        if (milestones) {
            res.status(200).json({
                status: "success",
                message: "Milestones retrieved successfully",
                data: milestones
            });
            return;
        }

        next(new Error("Failed to retrieve milestones"));
    } catch (error) {
        console.error("Error in getMilestonesByStudyPlanId controller:", error);
        next(error);
    }
}

// get a study session by study plan id
export async function getStudySessionsByStudyPlanId(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
        const planId = req.params.planId;
        if (!planId) {
            res.status(400).json({ success: false, message: "Plan ID is required" });
            return;
        }
        // Validate user is authenticated
        const customReq = req as CustomRequest;
        if (!customReq.user?.id) {
            res.status(401).json({ success: false, message: "Authentication required" });
            return;
        }

        const userId = customReq.user.id;

        const studySessions = await studyPlanService.getStudySessionsByStudyPlanId(planId);

        if (studySessions) {
            res.status(200).json({
                status: "success",
                message: "Study sessions retrieved successfully",
                data: studySessions
            });
            return;
        }

        next(new Error("Failed to retrieve study sessions"));
    } catch (error) {
        console.error("Error in getStudySessionsByStudyPlanId controller:", error);
        next(error);
    }
}