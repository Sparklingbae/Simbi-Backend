"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const settings_1 = __importDefault(require("./config/settings"));
const db_1 = require("./database/db");
const PORT = settings_1.default.PORT || 3000;
(0, db_1.connectToDB)().then(() => {
    app_1.default.listen(PORT, () => {
        console.log(`Server started on port ${settings_1.default.PORT}`);
    });
});
