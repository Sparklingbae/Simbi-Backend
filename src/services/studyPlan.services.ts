import OpenAI from "openai";
import { z } from "zod";
import config from "../config/settings";
// import prisma from "../database/db";
// import { User, StudyPlan } from "../prisma/generated/prisma";
import * as studyPlanModel from "../models/studyPlan.models";
import { StudyPlanInput, GeneratedStudyPlan,StudyPlanCreate} from "../interfaces/study-plan.interfaces";
import { any, } from "joi";

const client = new OpenAI({
  apiKey: config.SIMBI_AI_KEY,
  baseURL: "https://api.openai.com/v1",
});

// Zod schema for validating the input
const studyPlanInputSchema = z.object({
  name: z.string(),
  subjects: z.array(z.string()).or(z.string()),
  startDate: z.string(),
  endDate: z.string(),
  dailyStudyTime: z.string(),
  daysAvailable: z.array(z.string()).or(z.string()),
  priorityTag: z.string().optional().default("Medium"),
  difficultyLevel: z.string().optional().default("Intermediate"),
  studyLevel: z.string().optional().default("Undergraduate"),
  addToSchedule: z.boolean().or(z.string().transform(val => val === "Yes")).optional().default(false),
  preferredStudyMethod: z.string(),
  learningStyle: z.string(),
  dailyStudyDuration: z.string(),
  breakDuration: z.string(),
  needStudyTips: z.boolean().or(z.string().transform(val => val === "Yes")).optional().default(true),
  preferredTone: z.string().optional().default("Friendly"),
  milestoneType: z.string().optional().default("Weekly"),
  motivationPreference: z.string().optional().default("Encouraging"),
  checkInStyle: z.string().optional().default("Daily"),
  telegramReminder: z.boolean().or(z.string().transform(val => val === "Yes")).optional().default(false),
  rewardStyle: z.string().optional().default("Achievement badges"),
  rewardFrequency: z.string().optional().default("Weekly")
});

/**
 * Generates a study plan using the OpenAI API
 * @param input The user's study plan preferences
 * @returns A detailed, structured study plan
 */
export const generateStudyPlan = async (userId:string,input: StudyPlanInput): Promise<GeneratedStudyPlan> => {
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
    const prompt = createStudyPlanPrompt({
      ...validatedInput,
      subjects,
      daysAvailable
    });

    // Call OpenAI API
    const completion = await client.chat.completions.create({
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

    const generatedPlan = JSON.parse(response) as GeneratedStudyPlan;
    const studyPlan=await saveStudyPlan(userId, generatedPlan);
    await createMilestone(userId,studyPlan.id, generatedPlan.milestones);

    for (const dailySchedule of generatedPlan.schedule) {
        await createStudySession(userId,studyPlan.id, dailySchedule);
    }


    return generatedPlan;
  } catch (error) {
    console.error("Error generating study plan:", error);
    throw new Error(`Failed to generate study plan: ${error instanceof Error ? error.message : String(error)}`);
  }
};

/**
 * Creates a detailed prompt for the OpenAI API based on user inputs
 */
// new generated prompt
const createStudyPlanPrompt = (input: StudyPlanInput): string => {
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
export const saveStudyPlan = async (userId: string, plan: GeneratedStudyPlan) => {
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
    const savedPlan = await studyPlanModel.createStudyPlan(userId, studyPlanData);
    return savedPlan;
  } catch (error) {
    console.error("Error saving study plan:", error);
    throw new Error(`Failed to save study plan: ${error instanceof Error ? error.message : String(error)}`);
  }
};

/**
 * Retrieves all study plans for a user
 */
export const getUserStudyPlans = async (userId: string) => {
  try {
    return await studyPlanModel.getStudyPlansByUserId(userId);
  } catch (error) {
    console.error("Error retrieving study plans:", error);
    throw new Error(`Failed to retrieve study plans: ${error instanceof Error ? error.message : String(error)}`);
  }
};


// get all study plans of a user
export const getStudyPlans = async (userId: string) => {
  try {
    return await studyPlanModel.getStudyPlansByUserId(userId);
  } catch (error) {
    console.error("Error retrieving study plans:", error);
    throw new Error(`Failed to retrieve study plans: ${error instanceof Error ? error.message : String(error)}`);
  }
};

/**
 * Retrieves a single study plan by ID
 */
export const getStudyPlan = async (planId: string) => {
  try {
    return await studyPlanModel.getStudyPlanById(planId);
  } catch (error) {
    console.error("Error retrieving study plan:", error);
    throw new Error(`Failed to retrieve study plan: ${error instanceof Error ? error.message : String(error)}`);
  }
};


// update a study plan status
export const updateStudyPlanStatus = async (planId: string, status: string) => {
    try {
        const updatedPlan = await studyPlanModel.updateStudyPlanStatus(planId, status);
        return updatedPlan;
    }
    catch (error) {
        console.error("Error updating study plan status:", error);
        throw new Error(`Failed to update study plan status: ${error instanceof Error ? error.message : String(error)}`);
    }
};

// delete a study plan
export const deleteStudyPlan = async (planId: string) => {
  try {
    await studyPlanModel.deleteStudyPlan(planId);
    return { message: "Study plan deleted successfully" };
  } catch (error) {
    console.error("Error deleting study plan:", error);
    throw new Error(`Failed to delete study plan: ${error instanceof Error ? error.message : String(error)}`);
  }
};


// create a milestone
export const createMilestone = async (userId: string, studyPlanId: string, milestones: any) => {
  try {
    const studyPlan = await studyPlanModel.createMilestonesFromPlan(userId, studyPlanId, milestones);
    return studyPlan;
  } catch (error) {
    console.error("Error creating milestone:", error);
    throw new Error(`Failed to create milestone: ${error instanceof Error ? error.message : String(error)}`);
  }
};
  
// create a study session
export const createStudySession = async (userId: string, studyPlanId: string, dailySchedule: any) => {
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
      const studyPlan = await studyPlanModel.createStudySessionsFromPlan(userId, studyPlanId, sessions);
      return studyPlan;
    } catch (error) {
      console.error("Error creating study session:", error);
      throw new Error(`Failed to create study session: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

// get milestons by study plan id
export const getMilestonesByStudyPlanId = async (studyPlanId: string) => {
    try {
        return await studyPlanModel.getMilestonesByStudyPlanId(studyPlanId);
    } catch (error) {
        console.error("Error retrieving milestones:", error);
        throw new Error(`Failed to retrieve milestones: ${error instanceof Error ? error.message : String(error)}`);
    }
}

// get study sessions by study plan id
export const getStudySessionsByStudyPlanId = async (studyPlanId: string) => {
    try {
        return await studyPlanModel.getStudySessionsByStudyPlanId(studyPlanId);
    } catch (error) {
        console.error("Error retrieving study sessions:", error);
        throw new Error(`Failed to retrieve study sessions: ${error instanceof Error ? error.message : String(error)}`);
    }
}