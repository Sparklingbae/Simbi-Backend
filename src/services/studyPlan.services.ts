// import { OpenAI } from "openai";
// import settings from "../config/settings";
// import { z } from "zod";
// import { zodTextFormat } from "openai/helpers/zod";
// impo


// class StudyPlanService {
//     private client: OpenAI;
//     private StudyPlan: z.ZodSchema;
//     private zodTextFormat: any;
//     constructor() {
//         this.client = new OpenAI({
//             apiKey: config.SIMBI_AI_KEY,
//             baseURL: "https://api.openai.com/v1",
//         });
//     }

//     async generateStudyPlan(prompt) {
//         try {
//             const response = await this.client.responses.parse({
//                 model: "gpt-3.5-turbo",
//                 instructions: "create a study plan",
//                 input: [
//                     { role: "system", content: "Create a study plan" },
//                     { role: "user", content: prompt },
//                 ],
//                 text: {
//                     format: zodTextFormat(StudyPlan, "event"),
//                 },
//             });

//             return response.output_parsed;
//         } catch (error) {
//             console.error("Error extracting event information:", error);
//             throw new Error("Failed to extract event information.");
//         }
//     }
// }