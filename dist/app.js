"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const cors_2 = require("./config/cors");
const logger_1 = __importDefault(require("./utils/logger"));
const errorClasses_1 = require("./utils/errorClasses");
const userAndAuth_routes_1 = __importDefault(require("./routes/userAndAuth.routes"));
const error_middlewares_1 = require("./middlewares/error.middlewares");
const settings_1 = __importDefault(require("./config/settings"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: "50mb" }));
app.use((0, cors_1.default)(cors_2.corsConfig));
/*
* MORGAN LOGGER MIDDLEWARE
*/
app.use((0, logger_1.default)("[ :date ] :coloured-method :url :status :response-time ms"));
/*
* USERS AND AUTHENTICATION ROUTES
*/
app.use(`/api/v${settings_1.default.API_VERSION}`, userAndAuth_routes_1.default);
/*
* HOME ROUTE AND HEALTH CHECK
*/
app.get("/", (req, res) => {
    res
        .status(200)
        .json({ status: "success", message: "Welcome to Simbi-Backend" });
});
/**
 * CATCH ALL ROUTE
 */
app.all('*"catch_all"', (req, res, next) => {
    next(new errorClasses_1.NotFoundError(`Cannot find ${req.originalUrl} on this server`));
});
// GLOBAL ERROR HANDLING
app.use(error_middlewares_1.errorHandler);
exports.default = app;
