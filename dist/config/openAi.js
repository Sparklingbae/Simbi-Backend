"use strict";
// File: src/services/studyPlan.ts
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
exports.default = studyPlan;
const openai_1 = __importDefault(require("openai"));
const zod_1 = require("zod");
const settings_1 = __importDefault(require("../config/settings"));
const client = new openai_1.default({
    apiKey: settings_1.default.SIMBI_AI_KEY,
    baseURL: "https://api.openai.com/v1",
});
const StudyPlan = zod_1.z.object({
    topic: zod_1.z.string(),
    objectives: zod_1.z.array(zod_1.z.string()),
    schedule: zod_1.z.array(zod_1.z.object({
        date: zod_1.z.string(),
        time: zod_1.z.string(),
        activity: zod_1.z.string(),
    })),
});
function studyPlan(prompt) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        try {
            const response = yield client.chat.completions.create({
                model: "gpt-4o-2024-08-06",
                messages: [
                    {
                        role: "system",
                        content: `You are an assistant that outputs valid JSON only.
          
          Return a study plan JSON object matching the schema:
          
          {
            topic: string,
            objectives: string[],
            schedule: {
              date: string,    // e.g. "2025-05-06"
              time: string,    // e.g. "10:00 AM - 12:00 PM"
              activity: string // e.g. "Review Algebra"
            }[]
          }
          
          Never leave any field undefined or null. Do not include Markdown. Do not add extra text. Only output raw JSON.`,
                    },
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
                // Removed invalid response_format property
                // Removed invalid response_format property
                tools: [
                    {
                        type: "function",
                        function: {
                            name: "generate_study_plan",
                            description: "Generate a structured study plan",
                            parameters: {
                                type: "object",
                                properties: {
                                    topic: { type: "string" },
                                    objectives: {
                                        type: "array",
                                        items: { type: "string" }
                                    },
                                    schedule: {
                                        type: "array",
                                        items: {
                                            type: "object",
                                            properties: {
                                                date: { type: "string" },
                                                time: { type: "string" },
                                                activity: { type: "string" }
                                            },
                                            required: ["date", "time", "activity"]
                                        }
                                    }
                                },
                                required: ["topic", "objectives", "schedule"]
                            }
                        }
                    }
                ],
                tool_choice: { type: "function", function: { name: "generate_study_plan" } }
            });
            const rawText = (_a = response.choices[0].message.tool_calls) === null || _a === void 0 ? void 0 : _a[0].function.arguments;
            console.log("RAW GPT OUTPUT:", rawText);
            // Attempt to parse and validate with Zod
            if (!rawText) {
                throw new Error("Failed to extract study plan: rawText is undefined.");
            }
            const parsed = StudyPlan.parse(JSON.parse(rawText));
            return parsed;
        }
        catch (error) {
            console.error("Error extracting study plan:", error);
            throw new Error("Failed to extract study plan.");
        }
    });
}
