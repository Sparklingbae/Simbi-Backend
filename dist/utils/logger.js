"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const morgan_1 = __importDefault(require("morgan"));
morgan_1.default.token("coloured-method", (req) => {
    switch (req.method) {
        case "GET":
            return chalk_1.default.green(req.method);
        case "POST":
            return chalk_1.default.blue(req.method);
        case "PUT":
            return chalk_1.default.yellow(req.method);
        case "DELETE":
            return chalk_1.default.red(req.method);
        case "PATCH":
            return chalk_1.default.cyan(req.method);
        default:
            return chalk_1.default.white(req.method);
    }
});
exports.default = morgan_1.default;
