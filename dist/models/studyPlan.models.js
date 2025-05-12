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
exports.getStudySessionsByStudyPlanId = exports.getMilestonesByStudyPlanId = exports.createMilestonesFromPlan = exports.createStudySessionsFromPlan = exports.deleteStudyPlan = exports.updateStudyPlanStatus = exports.getStudyPlansByUserId = exports.getStudyPlanById = exports.createStudyPlan = void 0;
const db_1 = __importDefault(require("../database/db"));
/**
 * Create a new study plan in the database
 */
const createStudyPlan = (userId, data) => __awaiter(void 0, void 0, void 0, function* () {
    const createdPlan = yield db_1.default.studyPlan.create({
        data: {
            userId,
            name: data.name,
            subjects: data.subjects,
            startDate: data.startDate,
            endDate: data.endDate,
            totalHours: data.totalHours,
            difficultyLevel: data.difficultyLevel,
            planData: data.planData, // JSON type in Prisma
            status: data.status,
        }
    });
    return Object.assign(Object.assign({}, createdPlan), { planData: createdPlan.planData, status: createdPlan.status });
});
exports.createStudyPlan = createStudyPlan;
/**
 * Get a study plan by ID
 */
const getStudyPlanById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const studyPlan = yield db_1.default.studyPlan.findUnique({
        where: { id }
    });
    if (!studyPlan)
        return null;
    return Object.assign(Object.assign({}, studyPlan), { planData: studyPlan.planData, status: studyPlan.status });
});
exports.getStudyPlanById = getStudyPlanById;
/**
 * Get all study plans for a specific user
 */
const getStudyPlansByUserId = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    const studyPlans = yield db_1.default.studyPlan.findMany({
        where: { userId },
        orderBy: { createdAt: 'desc' }
    });
    return studyPlans.map(plan => (Object.assign(Object.assign({}, plan), { planData: plan.planData, status: plan.status })));
});
exports.getStudyPlansByUserId = getStudyPlansByUserId;
/**
 * Update a study plan's status
 */
const updateStudyPlanStatus = (id, status) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPlan = yield db_1.default.studyPlan.update({
        where: { id },
        data: { status }
    });
    return Object.assign(Object.assign({}, updatedPlan), { planData: updatedPlan.planData, status: updatedPlan.status });
});
exports.updateStudyPlanStatus = updateStudyPlanStatus;
/**
 * Delete a study plan
 */
const deleteStudyPlan = (id) => __awaiter(void 0, void 0, void 0, function* () {
    yield db_1.default.studyPlan.delete({
        where: { id }
    });
});
exports.deleteStudyPlan = deleteStudyPlan;
/**
 * Create study sessions from a study plan
 */
const createStudySessionsFromPlan = (userId, studyPlanId, sessions) => __awaiter(void 0, void 0, void 0, function* () {
    // Ensure sessions is an array
    if (!Array.isArray(sessions)) {
        console.error("Sessions is not an array:", sessions);
        throw new Error("Sessions must be an array");
    }
    // Create all sessions in a transaction
    yield db_1.default.$transaction(sessions.map(session => {
        try {
            // Validate that all required fields exist
            if (!session.date || !session.startTime || !session.endTime || !session.topic) {
                console.error("Invalid session data:", session);
                throw new Error("Session is missing required fields");
            }
            // Convert string dates to Date objects
            const dateObj = session.date instanceof Date ? session.date : new Date(session.date);
            const startTimeObj = session.startTime instanceof Date ? session.startTime : new Date(session.startTime);
            const endTimeObj = session.endTime instanceof Date ? session.endTime : new Date(session.endTime);
            // Check if dates are valid
            if (isNaN(dateObj.getTime()) || isNaN(startTimeObj.getTime()) || isNaN(endTimeObj.getTime())) {
                console.error("Invalid date in session:", session);
                throw new Error("Session contains invalid date");
            }
            // Calculate duration
            const durationMinutes = Math.floor((endTimeObj.getTime() - startTimeObj.getTime()) / 60000);
            // Ensure duration is positive
            if (durationMinutes <= 0) {
                console.warn("Session has zero or negative duration:", session);
                // You could either throw an error or set a minimum duration
                // throw new Error("Session duration must be positive");
                // Or set a minimum duration:
                const minimumDuration = 30; // 30 minutes
                return db_1.default.studySession.create({
                    data: {
                        userId,
                        studyPlanId,
                        date: dateObj,
                        startTime: startTimeObj,
                        endTime: endTimeObj,
                        topic: session.topic,
                        notes: session.description || null,
                        duration: minimumDuration,
                        completed: false
                    }
                });
            }
            return db_1.default.studySession.create({
                data: {
                    userId,
                    studyPlanId,
                    date: dateObj,
                    startTime: startTimeObj,
                    endTime: endTimeObj,
                    topic: session.topic,
                    notes: session.description || null,
                    duration: durationMinutes,
                    completed: false
                }
            });
        }
        catch (error) {
            console.error("Error processing session:", error, session);
            // Skip this session or handle the error as appropriate
            // For a transaction, you might want to throw the error
            throw error;
        }
    }));
});
exports.createStudySessionsFromPlan = createStudySessionsFromPlan;
/**
 * Create milestones from a study plan
 */
const createMilestonesFromPlan = (userId, studyPlanId, milestones) => __awaiter(void 0, void 0, void 0, function* () {
    // Create all milestones in a transaction
    yield db_1.default.$transaction(milestones.map(milestone => db_1.default.milestone.create({
        data: {
            userId,
            studyPlanId,
            description: milestone.description,
            targetDate: milestone.targetDate,
            completed: false
        }
    })));
});
exports.createMilestonesFromPlan = createMilestonesFromPlan;
// get a milestone by study plan id
const getMilestonesByStudyPlanId = (studyPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    const milestones = yield db_1.default.milestone.findMany({
        where: { studyPlanId },
        orderBy: { targetDate: 'asc' }
    });
    return milestones.map(milestone => (Object.assign(Object.assign({}, milestone), { targetDate: milestone.targetDate.toISOString().split('T')[0] // Format to YYYY-MM-DD
     })));
});
exports.getMilestonesByStudyPlanId = getMilestonesByStudyPlanId;
// get a study session by study plan id
const getStudySessionsByStudyPlanId = (studyPlanId) => __awaiter(void 0, void 0, void 0, function* () {
    const studySessions = yield db_1.default.studySession.findMany({
        where: { studyPlanId },
        orderBy: { date: 'asc' }
    });
    return studySessions.map(session => {
        var _a, _b;
        return (Object.assign(Object.assign({}, session), { date: session.date.toISOString().split('T')[0], startTime: ((_a = session.startTime) === null || _a === void 0 ? void 0 : _a.toISOString().split('T')[1].slice(0, 5)) || '', endTime: ((_b = session.endTime) === null || _b === void 0 ? void 0 : _b.toISOString().split('T')[1].slice(0, 5)) || '' // Format to HH:mm
         }));
    });
});
exports.getStudySessionsByStudyPlanId = getStudySessionsByStudyPlanId;
