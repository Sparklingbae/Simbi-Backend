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
exports.signUp = signUp;
exports.login = login;
exports.refreshToken = refreshToken;
exports.updateUserById = updateUserById;
exports.deleteUserById = deleteUserById;
exports.getMe = getMe;
const user_services_1 = require("../services/user.services");
const errorClasses_1 = require("../utils/errorClasses");
const bcrypt_1 = require("bcrypt");
const settings_1 = __importDefault(require("../config/settings"));
const jwt_1 = require("../utils/jwt");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function signUp(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user_info = req.body;
        const existing_user = yield (0, user_services_1.getUserByEmail)(user_info.email);
        if (!existing_user) {
            user_info.passwordHash = yield (0, bcrypt_1.hash)(user_info.password, settings_1.default.SALT_ROUNDS);
            delete user_info.password;
            const user = yield (0, user_services_1.createUser)(user_info);
            res.status(201).json({ status: "success", message: "User created successfully", user });
            return;
        }
        next(new errorClasses_1.ForbiddenError("User already exists"));
        return;
    });
}
function login(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user_to_login = req.body;
        const user = yield (0, user_services_1.getUserByEmail)(user_to_login.email);
        if (user) {
            const isPasswordValid = yield (0, bcrypt_1.compare)(user_to_login.password, user.passwordHash);
            if (isPasswordValid) {
                const access_token = (0, jwt_1.genereteJWTToken)(user.id, "access");
                const refresh_token = (0, jwt_1.genereteJWTToken)(user.id, "refresh");
                res.status(200).json({
                    status: "success",
                    message: "User logged in successfully",
                    access_token,
                    refresh_token,
                });
                return;
            }
        }
        next(new errorClasses_1.ForbiddenError("Invalid credentials"));
        return;
    });
}
function refreshToken(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const { refreshToken } = req.body;
        if (!refreshToken) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        try {
            const decoded = jsonwebtoken_1.default.verify(refreshToken, settings_1.default.REFRESH_JWT_SECRET);
            if (!decoded)
                next(new errorClasses_1.ForbiddenError("Invalid token"));
            const user = yield (0, user_services_1.getUserById)(decoded.sub);
            if (user) {
                const access_token = (0, jwt_1.genereteJWTToken)(user.id, "access");
                res.status(200).json({
                    status: "success",
                    message: "Token refreshed successfully",
                    access_token,
                });
                return;
            }
        }
        catch (err) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        next(new errorClasses_1.ForbiddenError("User not found"));
        return;
    });
}
function updateUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const user_id = req.params.id;
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== user_id) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        const user_to_update = req.body;
        const user = yield (0, user_services_1.getUserById)(user_id);
        if (user) {
            const updated_user = yield (0, user_services_1.updateUser)(user_id, user_to_update);
            res.status(200).json({
                status: "success",
                message: "User updated successfully",
                updated_user,
            });
            return;
        }
        next(new errorClasses_1.ForbiddenError("User not found"));
        return;
    });
}
function deleteUserById(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const user_id = req.params.id;
        if (((_a = req.user) === null || _a === void 0 ? void 0 : _a.id) !== user_id) {
            next(new errorClasses_1.ForbiddenError("Unauthorized"));
            return;
        }
        const user = yield (0, user_services_1.getUserById)(user_id);
        if (user) {
            const deleted_user = yield (0, user_services_1.deleteUser)(user_id);
            res.status(200).json({
                status: "success",
                message: "User deleted successfully",
                deleted_user,
            });
            return;
        }
        next(new errorClasses_1.ForbiddenError("User not found"));
        return;
    });
}
function getMe(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const current_user = req.user;
        if (current_user)
            delete current_user.passwordHash;
        res.status(200).json({
            status: "success",
            message: "User fetched successfully",
            user: req.user,
        });
        return;
    });
}
