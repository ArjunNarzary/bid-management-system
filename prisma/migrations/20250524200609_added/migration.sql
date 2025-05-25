/*
  Warnings:

  - Added the required column `emailId` to the `Email` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Email" ADD COLUMN     "emailId" TEXT NOT NULL;
