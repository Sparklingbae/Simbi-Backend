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
exports.loginValidator = loginValidator;
exports.signUpValidator = signUpValidator;
exports.updateValidator = updateValidator;
exports.refreshValidator = refreshValidator;
const joi_1 = __importDefault(require("joi"));
const errorClasses_1 = require("../utils/errorClasses");
function loginValidator(req, res, next) {
    const schema = joi_1.default.object({
        email: joi_1.default.string().email().required().messages({
            "string.email": "Please provide a valid email address",
            "any.required": "Email is required",
        }),
        password: joi_1.default.string().required().messages({
            "any.required": "Password is required",
        }),
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
}
function signUpValidator(req, res, next) {
    const createUserSchema = joi_1.default.object({
        username: joi_1.default.string().min(3).max(30).alphanum().required().messages({
            "string.min": "Username is required and must be between 3-30 alphanumeric characters",
            "string.max": "Username is required and must be between 3-30 alphanumeric characters",
            "string.alphanum": "Username is required and must be between 3-30 alphanumeric characters",
            "any.required": "Username is required and must be between 3-30 alphanumeric characters",
        }),
        email: joi_1.default.string().email({ minDomainSegments: 2 }).required().messages({
            "string.email": "A valid email address is required",
            "any.required": "A valid email address is required",
        }),
        password: joi_1.default.string().min(6).required().messages({
            "string.min": "Password is required and must be at least 6 characters",
            "any.required": "Password is required and must be at least 6 characters",
        }),
        firstName: joi_1.default.string().trim().max(50).messages({
            "string.max": "First name must not exceed 50 characters",
        }),
        lastName: joi_1.default.string().trim().max(50).messages({
            "string.max": "Last name must not exceed 50 characters",
        }),
        educationLevel: joi_1.default.string()
            .valid("elementary", "middle_school", "high_school", "undergraduate", "graduate", "doctorate", "other")
            .messages({
            "any.only": "Education level must be a valid option",
        }),
        timezone: joi_1.default.string()
            .pattern(/^[A-Za-z]+\/[A-Za-z_]+$/)
            .default("UTC")
            .messages({
            "string.pattern.base": "Timezone must be in the format Region/City (e.g., America/New_York)",
        }),
        preferredStudyMethod: joi_1.default.string()
            .valid("pomodoro", "spaced_repetition", "feynman", "active_recall", "other")
            .messages({
            "any.only": "Preferred study method must be a valid option",
        }),
    });
    const { error } = createUserSchema.validate(req.body);
    if (error) {
        next(new errorClasses_1.BadRequestError(error.message));
        return;
    }
    next();
}
function updateValidator(req, res, next) {
    const updateUserSchema = joi_1.default.object({
        username: joi_1.default.string().min(3).max(30).alphanum().messages({
            "string.min": "Username must be between 3-30 alphanumeric characters",
            "string.max": "Username must be between 3-30 alphanumeric characters",
            "string.alphanum": "Username must be between 3-30 alphanumeric characters",
        }),
        email: joi_1.default.string().email({ minDomainSegments: 2 }).messages({
            "string.email": "Please enter a valid email address",
        }),
        passwordHash: joi_1.default.string().min(6).messages({
            "string.min": "Password must be at least 6 characters",
        }),
        firstName: joi_1.default.string().trim().max(50).messages({
            "string.max": "First name must not exceed 50 characters",
        }),
        lastName: joi_1.default.string().trim().max(50).messages({
            "string.max": "Last name must not exceed 50 characters",
        }),
        educationLevel: joi_1.default.string()
            .valid("elementary", "middle_school", "high_school", "undergraduate", "graduate", "doctorate", "other")
            .messages({
            "any.only": "Education level must be a valid option",
        }),
        timezone: joi_1.default.string()
            .pattern(/^[A-Za-z]+\/[A-Za-z_]+$/)
            .messages({
            "string.pattern.base": "Timezone must be in the format Region/City (e.g., America/New_York)",
        }),
        preferredStudyMethod: joi_1.default.string()
            .valid("pomodoro", "spaced_repetition", "feynman", "active_recall", "other")
            .messages({
            "any.only": "Preferred study method must be a valid option",
        }),
        lastLogin: joi_1.default.date().iso().messages({
            "date.base": "Last login must be a valid ISO date",
            "date.format": "Last login must be a valid ISO date",
        }),
    });
    const { error } = updateUserSchema.validate(req.body);
    if (error) {
        next(new errorClasses_1.BadRequestError(error.message));
    }
    next();
}
function refreshValidator(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const refreshSchema = joi_1.default.object({
            refreshToken: joi_1.default.string().required().messages({
                "any.required": "Refresh token is required",
            }),
        });
        const { error } = refreshSchema.validate(req.body);
        if (error) {
            next(new errorClasses_1.BadRequestError(error.message));
            return;
        }
        next();
    });
}
