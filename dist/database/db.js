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
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDB = connectToDB;
const prisma_1 = require("../prisma/generated/prisma");
const prisma = new prisma_1.PrismaClient();
//function to connect
function connectToDB() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const connection = yield prisma.$connect();
            console.log("Database Successfully connected");
        }
        catch (err) {
            console.error("Failed to connect to database");
            process.exit(1);
        }
    });
}
exports.default = prisma;
