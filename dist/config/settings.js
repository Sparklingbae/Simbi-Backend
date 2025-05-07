"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class Config {
}
Config.PORT = process.env.PORT;
Config.DATABASE_URL = process.env.DATABASE_URL;
Config.ACCESS_JWT_SECRET = (_a = process.env.ACCESS_JWT_SECRET) !== null && _a !== void 0 ? _a : "your-secret-key";
Config.REFRESH_JWT_SECRET = (_b = process.env.REFRESH_JWT_SECRET) !== null && _b !== void 0 ? _b : "your-secret-key";
Config.JWT_EXPIRATION_MINUTES = process.env.JWT_EXPIRATION_MINUTES
    ? parseInt(process.env.JWT_EXPIRATION_MINUTES)
    : 5;
Config.JWT_EXPIRATION_HOURS = process.env.JWT_EXPIRATION_HOURS
    ? parseInt(process.env.JWT_EXPIRATION_HOURS) * 60
    : 24;
Config.ALLOWED_ORIGINS = ((_c = process.env.ALLOWED_ORIGINS) === null || _c === void 0 ? void 0 : _c.split(",")) || [];
Config.SALT_ROUNDS = process.env.SALT_ROUNDS ? parseInt(process.env.SALT_ROUNDS) : 10;
Config.API_VERSION = process.env.API_VERSION || "1";
exports.default = Config;
