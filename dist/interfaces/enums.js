"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestionType = exports.MilestoneStatus = exports.DailyStatus = exports.PlanStatus = void 0;
var PlanStatus;
(function (PlanStatus) {
    PlanStatus["ACTIVE"] = "ACTIVE";
    PlanStatus["COMPLETED"] = "COMPLETED";
    PlanStatus["ARCHIVED"] = "ARCHIVED";
})(PlanStatus || (exports.PlanStatus = PlanStatus = {}));
var DailyStatus;
(function (DailyStatus) {
    DailyStatus["COMPLETED"] = "COMPLETED";
    DailyStatus["PARTIAL"] = "PARTIAL";
    DailyStatus["MISSED"] = "MISSED";
})(DailyStatus || (exports.DailyStatus = DailyStatus = {}));
var MilestoneStatus;
(function (MilestoneStatus) {
    MilestoneStatus["PENDING"] = "PENDING";
    MilestoneStatus["IN_PROGRESS"] = "IN_PROGRESS";
    MilestoneStatus["COMPLETED"] = "COMPLETED";
    MilestoneStatus["MISSED"] = "MISSED";
})(MilestoneStatus || (exports.MilestoneStatus = MilestoneStatus = {}));
var QuestionType;
(function (QuestionType) {
    QuestionType["MULTIPLE_CHOICE"] = "MULTIPLE_CHOICE";
    QuestionType["TRUE_FALSE"] = "TRUE_FALSE";
    QuestionType["SHORT_ANSWER"] = "SHORT_ANSWER";
})(QuestionType || (exports.QuestionType = QuestionType = {}));
