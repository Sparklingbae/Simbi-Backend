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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudySessionsByStudyPlanId = exports.getMilestonesByStudyPlanId = exports.createStudySession = exports.createMilestone = exports.deleteStudyPlan = exports.updateStudyPlanStatus = exports.getStudyPlan = exports.getStudyPlans = exports.getUserStudyPlans = exports.saveStudyPlan = exports.generateStudyPlan = void 0;
const openai_1 = __importDefault(require("openai"));
const zod_1 = require("zod");
const settings_1 = __importDefault(require("../config/settings"));
// import prisma from "../database/db";
// import { User, StudyPlan } from "../prisma/generated/prisma";
const studyPlanModel = __importStar(require("../models/studyPlan.models"));
const client = new openai_1.default({
    apiKey: settings_1.default.SIMBI_AI_KEY,
    baseURL: "https://api.openai.com/v1",
});
// Zod schema for validating the input
const studyPlanInputSchema = zod_1.z.object({
    name: zod_1.z.string(),
    subjects: zod_1.z.array(zod_1.z.string()).or(zod_1.z.string()),
    startDate: zod_1.z.string(),
    endDate: zod_1.z.string(),
    dailyStudyTime: zod_1.z.string(),
    daysAvailable: zod_1.z.array(zod_1.z.string()).or(zod_1.z.string()),
    priorityTag: zod_1.z.string(),
    difficultyLevel: zod_1.z.string(),
    studyLevel: zod_1.z.string(),
    addToSchedule: zod_1.z.boolean().or(zod_1.z.string().transform(val => val === "Yes")),
    preferredStudyMethod: zod_1.z.string(),
    learningStyle: zod_1.z.string(),
    dailyStudyDuration: zod_1.z.string(),
    breakDuration: zod_1.z.string(),
    needStudyTips: zod_1.z.boolean().or(zod_1.z.string().transform(val => val === "Yes")),
    preferredTone: zod_1.z.string(),
    milestoneType: zod_1.z.string(),
    motivationPreference: zod_1.z.string(),
    checkInStyle: zod_1.z.string(),
    telegramReminder: zod_1.z.boolean().or(zod_1.z.string().transform(val => val === "Yes")),
    rewardStyle: zod_1.z.string(),
    rewardFrequency: zod_1.z.string()
});
/**
 * Generates a study plan using the OpenAI API
 * @param input The user's study plan preferences
 * @returns A detailed, structured study plan
 */
const generateStudyPlan = (userId, input) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Validate the input
        const validatedInput = studyPlanInputSchema.parse(input);
        // Format subjects as array if string
        const subjects = Array.isArray(validatedInput.subjects)
            ? validatedInput.subjects
            : [validatedInput.subjects];
        // Format days available as array if string
        const daysAvailable = Array.isArray(validatedInput.daysAvailable)
            ? validatedInput.daysAvailable
            : validatedInput.daysAvailable.split('/');
        // Create a standardized prompt for the AI
        const prompt = createStudyPlanPrompt(Object.assign(Object.assign({}, validatedInput), { subjects,
            daysAvailable }));
        // Call OpenAI API
        const completion = yield client.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are a professional education consultant specialized in creating detailed, personalized study plans. You create structured, practical study schedules that help students achieve their academic goals."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            response_format: { type: "json_object" }
        });
        // Parse and return the AI-generated study plan
        const response = completion.choices[0].message.content;
        if (!response) {
            throw new Error("Failed to generate study plan");
        }
        const generatedPlan = JSON.parse(response);
        const studyPlan = yield (0, exports.saveStudyPlan)(userId, generatedPlan);
        yield (0, exports.createMilestone)(userId, studyPlan.id, generatedPlan.milestones);
        for (const dailySchedule of generatedPlan.schedule) {
            yield (0, exports.createStudySession)(userId, studyPlan.id, dailySchedule);
        }
        return generatedPlan;
    }
    catch (error) {
        console.error("Error generating study plan:", error);
        throw new Error(`Failed to generate study plan: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.generateStudyPlan = generateStudyPlan;
/**
 * Creates a detailed prompt for the OpenAI API based on user inputs
 */
// new generated prompt
const createStudyPlanPrompt = (input) => {
    return `
  Create a detailed study plan with the following parameters:
  
  ## Study Plan Overview
  - Name: ${input.name}
  - Subject(s): ${Array.isArray(input.subjects) ? input.subjects.join(", ") : input.subjects}
  - Duration: ${input.startDate} to ${input.endDate}
  - Daily Study Time: ${input.dailyStudyTime}
  - Available Days: ${Array.isArray(input.daysAvailable) ? input.daysAvailable.join(", ") : input.daysAvailable}
  - Priority: ${input.priorityTag}
  - Difficulty Level: ${input.difficultyLevel}
  - Study Level: ${input.studyLevel}
  
  ## Study Preferences
  - Preferred Study Method: ${input.preferredStudyMethod}
  - Learning Style: ${input.learningStyle}
  - Daily Study Duration: ${input.dailyStudyDuration}
  - Break Duration: ${input.breakDuration}
  - Preferred Tone: ${input.preferredTone}
  
  ## Milestones & Motivation
  - Milestone Type: ${input.milestoneType}
  - Motivation Style: ${input.motivationPreference}
  - Check-in Style: ${input.checkInStyle}
  - Reward Style: ${input.rewardStyle}
  - Reward Frequency: ${input.rewardFrequency}
  
  Please create a detailed, structured JSON response with the following format:
  {
    "overview": {
      "name": "Study plan name",
      "subjects": ["subject1", "subject2"],
      "duration": "start to end",
      "totalHours": number,
      "difficulty": "level"
    },
    "schedule": [
      {
        "date": "YYYY-MM-DD",
        "dayOfWeek": "Monday",
        "sessions": [
          {   
            "date": "YYYY-MM-DDTHH:mm:ss.sssZ",
            "topic": "specific topic",
            "startTime": "YYYY-MM-DDTHH:mm:ss.sssZ",
            "endTime": "YYYY-MM-DDTHH:mm:ss.sssZ",
            "description": "detailed description of what to study",
            "resources": ["optional resources"]
          }
        ]
      }
    ],
    "milestones": [
      {
        "targetDate": "YYYY-MM-DDTHH:mm:ss.sssZ",
        "description": "milestone description",
        "completed": false
      }
    ],
    "tips": [
      "Study tip 1",
      "Study tip 2"
    ],
    "rewards": [
      {
        "milestone": "milestone description",
        "reward": "reward description"
      }
    ]
  }
  
  Make sure the schedule accounts for the specified days available and daily durations. The plan should be comprehensive, realistic, and tailored to the subject and difficulty level.
  
  IMPORTANT: Please include at least 3 meaningful milestones strategically placed throughout the study duration to track progress. These milestones should represent significant achievements or checkpoints (beginning, middle, and end) that align with the student's learning journey. Each milestone should have a clear, achievable objective with a specific target date.
  `;
};
/**
 * Saves a generated study plan to the database
 */
const saveStudyPlan = (userId, plan) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Format the plan data for database storage
        const studyPlanData = {
            name: plan.overview.name,
            subjects: plan.overview.subjects,
            startDate: new Date(plan.schedule[0].date),
            endDate: new Date(plan.schedule[plan.schedule.length - 1].date),
            totalHours: plan.overview.totalHours,
            difficultyLevel: plan.overview.difficulty,
            planData: plan, // Store the full JSON plan
            status: "active"
        };
        // Save to database
        const savedPlan = yield studyPlanModel.createStudyPlan(userId, studyPlanData);
        return savedPlan;
    }
    catch (error) {
        console.error("Error saving study plan:", error);
        throw new Error(`Failed to save study plan: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.saveStudyPlan = saveStudyPlan;
/**
 * Retrieves all study plans for a user
 */
const getUserStudyPlans = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield studyPlanModel.getStudyPlansByUserId(userId);
    }
    catch (error) {
        console.error("Error retrieving study plans:", error);
        throw new Error(`Failed to retrieve study plans: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.getUserStudyPlans = getUserStudyPlans;
// get all study plans of a user
const getStudyPlans = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield studyPlanModel.getStudyPlansByUserId(userId);
    }
    catch (error) {
        console.error("Error retrieving study plans:", error);
        throw new Error(`Failed to retrieve study plans: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.getStudyPlans = getStudyPlans;
/**
 * Retrieves a single study plan by ID
 */
const getStudyPlan = (planId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield studyPlanModel.getStudyPlanById(planId);
    }
    catch (error) {
        console.error("Error retrieving study plan:", error);
        throw new Error(`Failed to retrieve study plan: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.getStudyPlan = getStudyPlan;
// update a study plan status
const updateStudyPlanStatus = (planId, status) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedPlan = yield studyPlanModel.updateStudyPlanStatus(planId, status);
        return updatedPlan;
    }
    catch (error) {
        console.error("Error updating study plan status:", error);
        throw new Error(`Failed to update study plan status: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.updateStudyPlanStatus = updateStudyPlanStatus;
// delete a study plan
const deleteStudyPlan = (planId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield studyPlanModel.deleteStudyPlan(planId);
        return { message: "Study plan deleted successfully" };
    }
    catch (error) {
        console.error("Error deleting study plan:", error);
        throw new Error(`Failed to delete study plan: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.deleteStudyPlan = deleteStudyPlan;
// create a milestone
const createMilestone = (userId, studyPlanId, milestones) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const studyPlan = yield studyPlanModel.createMilestonesFromPlan(userId, studyPlanId, milestones);
        return studyPlan;
    }
    catch (error) {
        console.error("Error creating milestone:", error);
        throw new Error(`Failed to create milestone: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.createMilestone = createMilestone;
// create a study session
const createStudySession = (userId, studyPlanId, dailySchedule) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Extract the sessions array from the daily schedule object
        const sessions = dailySchedule.sessions;
        // Add defensive check
        if (!sessions) {
            console.warn("No sessions found in daily schedule:", dailySchedule);
            return;
        }
        if (!Array.isArray(sessions)) {
            console.warn("Sessions is not an array:", sessions);
            return;
        }
        // Now pass the actual sessions array to createStudySessionsFromPlan
        const studyPlan = yield studyPlanModel.createStudySessionsFromPlan(userId, studyPlanId, sessions);
        return studyPlan;
    }
    catch (error) {
        console.error("Error creating study session:", error);
        throw new Error(`Failed to create study session: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.createStudySession = createStudySession;
// get milestons by study plan id
const getMilestonesByStudyPlanId = (studyPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield studyPlanModel.getMilestonesByStudyPlanId(studyPlanId);
    }
    catch (error) {
        console.error("Error retrieving milestones:", error);
        throw new Error(`Failed to retrieve milestones: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.getMilestonesByStudyPlanId = getMilestonesByStudyPlanId;
// get study sessions by study plan id
const getStudySessionsByStudyPlanId = (studyPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield studyPlanModel.getStudySessionsByStudyPlanId(studyPlanId);
    }
    catch (error) {
        console.error("Error retrieving study sessions:", error);
        throw new Error(`Failed to retrieve study sessions: ${error instanceof Error ? error.message : String(error)}`);
    }
});
exports.getStudySessionsByStudyPlanId = getStudySessionsByStudyPlanId;
