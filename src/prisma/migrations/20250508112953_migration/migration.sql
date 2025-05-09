/*
  Warnings:

  - You are about to drop the column `completedAt` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `completionCriteria` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `dueDate` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `milestones` table. All the data in the column will be lost.
  - You are about to drop the column `dailyTargetMinutes` on the `study_plans` table. All the data in the column will be lost.
  - You are about to drop the column `lastUpdated` on the `study_plans` table. All the data in the column will be lost.
  - You are about to drop the column `planName` on the `study_plans` table. All the data in the column will be lost.
  - You are about to drop the column `subjectId` on the `study_plans` table. All the data in the column will be lost.
  - You are about to drop the column `durationMinutes` on the `study_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `planId` on the `study_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `productivityRating` on the `study_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `sessionDate` on the `study_sessions` table. All the data in the column will be lost.
  - You are about to drop the column `simbiReaction` on the `study_sessions` table. All the data in the column will be lost.
  - You are about to drop the `plan_daily_status` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `progress_tracking` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz_attempt_questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz_attempts` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `quiz_questions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subjects` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `targetDate` to the `milestones` table without a default value. This is not possible if the table is not empty.
  - Made the column `description` on table `milestones` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `difficultyLevel` to the `study_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `study_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `planData` to the `study_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `totalHours` to the `study_plans` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `study_plans` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `status` on the `study_plans` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `date` to the `study_sessions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `topic` to the `study_sessions` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "milestones" DROP CONSTRAINT "milestones_planId_fkey";

-- DropForeignKey
ALTER TABLE "milestones" DROP CONSTRAINT "milestones_userId_fkey";

-- DropForeignKey
ALTER TABLE "plan_daily_status" DROP CONSTRAINT "plan_daily_status_planId_fkey";

-- DropForeignKey
ALTER TABLE "progress_tracking" DROP CONSTRAINT "progress_tracking_userId_fkey";

-- DropForeignKey
ALTER TABLE "quiz_attempt_questions" DROP CONSTRAINT "quiz_attempt_questions_questionId_fkey";

-- DropForeignKey
ALTER TABLE "quiz_attempt_questions" DROP CONSTRAINT "quiz_attempt_questions_quizAttemptId_fkey";

-- DropForeignKey
ALTER TABLE "quiz_attempts" DROP CONSTRAINT "quiz_attempts_userId_fkey";

-- DropForeignKey
ALTER TABLE "quiz_questions" DROP CONSTRAINT "quiz_questions_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "study_plans" DROP CONSTRAINT "study_plans_subjectId_fkey";

-- DropForeignKey
ALTER TABLE "study_plans" DROP CONSTRAINT "study_plans_userId_fkey";

-- DropForeignKey
ALTER TABLE "study_sessions" DROP CONSTRAINT "study_sessions_planId_fkey";

-- DropForeignKey
ALTER TABLE "study_sessions" DROP CONSTRAINT "study_sessions_userId_fkey";

-- DropForeignKey
ALTER TABLE "subjects" DROP CONSTRAINT "subjects_userId_fkey";

-- DropIndex
DROP INDEX "milestones_planId_idx";

-- DropIndex
DROP INDEX "milestones_userId_idx";

-- DropIndex
DROP INDEX "study_plans_subjectId_idx";

-- DropIndex
DROP INDEX "study_plans_userId_idx";

-- DropIndex
DROP INDEX "study_sessions_planId_idx";

-- DropIndex
DROP INDEX "study_sessions_sessionDate_idx";

-- DropIndex
DROP INDEX "study_sessions_userId_idx";

-- AlterTable
ALTER TABLE "milestones" DROP COLUMN "completedAt",
DROP COLUMN "completionCriteria",
DROP COLUMN "createdAt",
DROP COLUMN "dueDate",
DROP COLUMN "planId",
DROP COLUMN "status",
DROP COLUMN "title",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "targetDate" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "description" SET NOT NULL;

-- AlterTable
ALTER TABLE "study_plans" DROP COLUMN "dailyTargetMinutes",
DROP COLUMN "lastUpdated",
DROP COLUMN "planName",
DROP COLUMN "subjectId",
ADD COLUMN     "difficultyLevel" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "planData" JSONB NOT NULL,
ADD COLUMN     "subjects" TEXT[],
ADD COLUMN     "totalHours" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "startDate" SET DATA TYPE TIMESTAMP(3),
ALTER COLUMN "endDate" SET DATA TYPE TIMESTAMP(3),
DROP COLUMN "status",
ADD COLUMN     "status" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "study_sessions" DROP COLUMN "durationMinutes",
DROP COLUMN "planId",
DROP COLUMN "productivityRating",
DROP COLUMN "sessionDate",
DROP COLUMN "simbiReaction",
ADD COLUMN     "completed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "studyPlanId" TEXT,
ADD COLUMN     "topic" TEXT NOT NULL,
ALTER COLUMN "endTime" DROP NOT NULL;

-- DropTable
DROP TABLE "plan_daily_status";

-- DropTable
DROP TABLE "progress_tracking";

-- DropTable
DROP TABLE "quiz_attempt_questions";

-- DropTable
DROP TABLE "quiz_attempts";

-- DropTable
DROP TABLE "quiz_questions";

-- DropTable
DROP TABLE "subjects";

-- DropEnum
DROP TYPE "DailyStatus";

-- DropEnum
DROP TYPE "MilestoneStatus";

-- DropEnum
DROP TYPE "PlanStatus";

-- DropEnum
DROP TYPE "QuestionType";

-- AddForeignKey
ALTER TABLE "study_plans" ADD CONSTRAINT "study_plans_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "study_sessions" ADD CONSTRAINT "study_sessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "study_sessions" ADD CONSTRAINT "study_sessions_studyPlanId_fkey" FOREIGN KEY ("studyPlanId") REFERENCES "study_plans"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "milestones" ADD CONSTRAINT "milestones_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
