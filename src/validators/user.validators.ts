import { Request, Response, NextFunction } from "express";
import Joi from "joi";

export function loginValidator(req: Request, res: Response, next: NextFunction): void {
	const schema = Joi.object({
		email: Joi.string().email().required().messages({
			"string.email": "Please provide a valid email address",
			"any.required": "Email is required",
		}),
		password: Joi.string().required().messages({
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

export function signUpValidator(req: Request, res: Response, next: NextFunction): void {
	const schema = Joi.object({
		username: Joi.string().required().messages({
			"string.username": "Please provide a valid username",
			"any.required": "Username is required",
		}),
		firstName: Joi.string().required().messages({
			"string.username": "Please provide a valid firstname",
			"any.required": "firstname is required",
		}),
		lastName: Joi.string().required().messages({
			"string.username": "Please provide a valid lastname",
			"any.required": "firstname is required",
		}),
		email: Joi.string().email().required().messages({
			"string.email": "Please provide a valid email address",
			"any.required": "Email is required",
		}),
		password: Joi.string().required().messages({
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
