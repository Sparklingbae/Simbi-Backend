"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateStudyPlan = generateStudyPlan;
exports.getAllStudyPlans = getAllStudyPlans;
exports.getStudyPlan = getStudyPlan;
exports.updateStudyPlanStatus = updateStudyPlanStatus;
exports.deleteStudyPlan = deleteStudyPlan;
exports.getMilestonesByStudyPlanId = getMilestonesByStudyPlanId;
exports.getStudySessionsByStudyPlanId = getStudySessionsByStudyPlanId;
const studyPlanService = __importStar(require("../services/studyPlan.services"));
function generateStudyPlan(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const studyPlanInput = req.body;
            const userId = customReq.user.id;
            // Generate study plan using OpenAI
            const generatedPlan = yield studyPlanService.generateStudyPlan(userId, studyPlanInput);
            if (generatedPlan) {
                res.status(200).json({
                    status: "success",
                    message: "Study plan generated successfully",
                    data: generatedPlan
                });
                return;
            }
            next(new Error("Failed to generate study plan"));
        }
        catch (error) {
            console.error("Error in generateStudyPlan controller:", error);
            next(error);
        }
    });
}
//get all study plans created by a user
function getAllStudyPlans(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            const studyPlans = yield studyPlanService.getStudyPlans(userId);
            if (studyPlans) {
                res.status(200).json({
                    status: "success",
                    message: "Study plans retrieved successfully",
                    data: studyPlans
                });
                return;
            }
            next(new Error("Failed to retrieve study plans"));
        }
        catch (error) {
            console.error("Error in getAllStudyPlans controller:", error);
            next(error);
        }
    });
}
// this function is used to get the study plan a particular user study plan
function getStudyPlan(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const planId = req.params.planId;
            if (!planId) {
                res.status(400).json({ success: false, message: "Plan ID is required" });
                return;
            }
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            const studyPlan = yield studyPlanService.getStudyPlan(planId);
            if (studyPlan) {
                res.status(200).json({
                    status: "success",
                    message: "Study plan retrieved successfully",
                    data: studyPlan
                });
                return;
            }
            next(new Error("Failed to retrieve study plan"));
        }
        catch (error) {
            console.error("Error in getStudyPlan controller:", error);
            next(error);
        }
    });
}
// Update a study plan  status
function updateStudyPlanStatus(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const planId = req.params.planId;
            if (!planId) {
                res.status(400).json({ success: false, message: "Plan ID is required" });
                return;
            }
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            const status = req.body.status;
            const updatedPlan = yield studyPlanService.updateStudyPlanStatus(planId, status);
            if (updatedPlan) {
                res.status(200).json({
                    status: "success",
                    message: "Study plan status updated successfully",
                    data: updatedPlan
                });
                return;
            }
            next(new Error("Failed to update study plan status"));
        }
        catch (error) {
            console.error("Error in updateStudyPlanStatus controller:", error);
            next(error);
        }
    });
}
// Delete a study plan
function deleteStudyPlan(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const planId = req.params.planId;
            if (!planId) {
                res.status(400).json({ success: false, message: "Plan ID is required" });
                return;
            }
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            yield studyPlanService.deleteStudyPlan(planId);
            res.status(200).json({
                status: "success",
                message: "Study plan deleted successfully"
            });
        }
        catch (error) {
            console.error("Error in deleteStudyPlan controller:", error);
            next(error);
        }
    });
}
// get a milestone by study plan id
function getMilestonesByStudyPlanId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const planId = req.params.planId;
            if (!planId) {
                res.status(400).json({ success: false, message: "Plan ID is required" });
                return;
            }
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            const milestones = yield studyPlanService.getMilestonesByStudyPlanId(planId);
            if (milestones) {
                res.status(200).json({
                    status: "success",
                    message: "Milestones retrieved successfully",
                    data: milestones
                });
                return;
            }
            next(new Error("Failed to retrieve milestones"));
        }
        catch (error) {
            console.error("Error in getMilestonesByStudyPlanId controller:", error);
            next(error);
        }
    });
}
// get a study session by study plan id
function getStudySessionsByStudyPlanId(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const planId = req.params.planId;
            if (!planId) {
                res.status(400).json({ success: false, message: "Plan ID is required" });
                return;
            }
            // Validate user is authenticated
            const customReq = req;
            if (!((_a = customReq.user) === null || _a === void 0 ? void 0 : _a.id)) {
                res.status(401).json({ success: false, message: "Authentication required" });
                return;
            }
            const userId = customReq.user.id;
            const studySessions = yield studyPlanService.getStudySessionsByStudyPlanId(planId);
            if (studySessions) {
                res.status(200).json({
                    status: "success",
                    message: "Study sessions retrieved successfully",
                    data: studySessions
                });
                return;
            }
            next(new Error("Failed to retrieve study sessions"));
        }
        catch (error) {
            console.error("Error in getStudySessionsByStudyPlanId controller:", error);
            next(error);
        }
    });
}
