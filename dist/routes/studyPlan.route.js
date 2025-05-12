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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const studyPlanController = __importStar(require("../controllers/studyPlan.controllers"));
const authentication_middlewares_1 = require("../middlewares/authentication.middlewares");
const router = express_1.default.Router();
/**
 * @route POST /api/study-plans/generate
 * @desc Generate a study plan using AI
 * @access Private
 */
router.post("/generate", authentication_middlewares_1.authMiddleware, studyPlanController.generateStudyPlan);
router.get("/all", authentication_middlewares_1.authMiddleware, studyPlanController.getAllStudyPlans);
router.get("/:planId", authentication_middlewares_1.authMiddleware, studyPlanController.getStudyPlan);
router.delete("/:planId", authentication_middlewares_1.authMiddleware, studyPlanController.deleteStudyPlan);
router.put("/:planId", authentication_middlewares_1.authMiddleware, studyPlanController.updateStudyPlanStatus);
// route to get all milestones of a study plan
router.get("/:planId/milestones", authentication_middlewares_1.authMiddleware, studyPlanController.getMilestonesByStudyPlanId);
// route to get all study sessions of a study plan
router.get("/:planId/sessions", authentication_middlewares_1.authMiddleware, studyPlanController.getStudySessionsByStudyPlanId);
exports.default = router;
