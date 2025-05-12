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
const preassessment_1 = require("../validators/preassessment");
const express_1 = require("express");
const authentication_middlewares_1 = require("../middlewares/authentication.middlewares");
const db_1 = __importDefault(require("../database/db"));
const preassessmentRoute = (0, express_1.Router)();
preassessmentRoute.post("/", authentication_middlewares_1.authMiddleware, preassessment_1.preassessmentValidator, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    yield db_1.default.user.update({
        where: {
            id: (_a = req.user) === null || _a === void 0 ? void 0 : _a.id,
        },
        data: {
            preferredStudyMethod: req.body["What’s your preferred way of studying?"],
            preAssesmentQuestions: req.body,
        },
    });
    res.status(200).json({
        status: "success",
        message: "Preassessment saved successfully",
    });
    return;
}));
exports.default = preassessmentRoute;
