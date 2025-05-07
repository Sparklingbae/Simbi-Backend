"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorClasses_1 = require("../utils/errorClasses");
const errorHandler = (err, req, res, next) => {
    if (err instanceof errorClasses_1.AppError) {
        return res.status(err.statusCode).json({
            status: err.status,
            message: err.message,
        });
    }
    if (err instanceof errorClasses_1.ForbiddenError) {
        return res.status(err.statusCode).json({
            status: "forbidden",
            message: err.message,
        });
    }
    // For unexpected errors
    console.error("ERROR: ", err);
    return res.status(500).json({
        status: "error",
        message: "Something went wrong",
    });
};
exports.errorHandler = errorHandler;
