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
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const settings_1 = __importDefault(require("../config/settings"));
const user_services_1 = require("../services/user.services");
const errorClasses_1 = require("../utils/errorClasses");
function authMiddleware(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.headers.authorization) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        const token = req.headers.authorization.split(" ")[1];
        if (!token) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(token, settings_1.default.ACCESS_JWT_SECRET);
            if (!decoded)
                next(new errorClasses_1.ForbiddenError("Invalid token"));
            const user = yield (0, user_services_1.getUserById)(decoded.sub);
            if (user)
                req.user = user;
            else
                next(new errorClasses_1.NotFoundError("User not found"));
        }
        catch (err) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        next();
    });
}
