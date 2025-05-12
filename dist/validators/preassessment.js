"use strict";
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
exports.preassessmentValidator = preassessmentValidator;
const joi_1 = __importDefault(require("joi"));
function preassessmentValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const schema = joi_1.default.object({
            "What’s your preferred way of studying?": joi_1.default.string().required(),
            "How do you usually take notes?": joi_1.default.string().required(),
            "What time do you feel most focused?": joi_1.default.string().required(),
            "How long can you study before losing focus?": joi_1.default.string().required(),
            "What is your biggest struggle when studying?": joi_1.default.string().required(),
            "How often do you procrastinate on studying?": joi_1.default.string().required(),
            "What is your current level of education?": joi_1.default.string().required(),
            "Would you like Simbi to hold you accountable? (e.g, with reminders or check-ins)?": joi_1.default
                .string()
                .required(),
            "How should SIMBI react if you miss a study goal?": joi_1.default.string().required(),
            "What are your current learning goals?": joi_1.default.string().required().min(20),
            "How often would you like SIMBI to check in on your progress?": joi_1.default.string().required(),
        });
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({
                message: "Validation error",
                details: error.details.map((d) => d.message),
            });
            return;
        }
        next();
    });
}
