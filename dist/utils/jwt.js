"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.genereteJWTToken = genereteJWTToken;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const settings_1 = __importDefault(require("../config/settings"));
function genereteJWTToken(id, type) {
    const payload = {
        sub: id,
    };
    const exp = type === "access"
        ? { expiresIn: settings_1.default.JWT_EXPIRATION_MINUTES * 60 * 1000 }
        : { expiresIn: settings_1.default.JWT_EXPIRATION_HOURS * 60 * 60 * 1000 };
    const secret_key = type === "access" ? settings_1.default.ACCESS_JWT_SECRET : settings_1.default.REFRESH_JWT_SECRET;
    const token = jsonwebtoken_1.default.sign(payload, secret_key, exp);
    return token;
}
