/*
  Warnings:

  - You are about to drop the `Group` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Kid` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Parent` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ride` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Kid" DROP CONSTRAINT "Kid_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Kid" DROP CONSTRAINT "Kid_parentid_fkey";

-- DropForeignKey
ALTER TABLE "Parent" DROP CONSTRAINT "Parent_groupId_fkey";

-- DropForeignKey
ALTER TABLE "Ride" DROP CONSTRAINT "Ride_groupId_fkey";

-- DropTable
DROP TABLE "Group";

-- DropTable
DROP TABLE "Kid";

-- DropTable
DROP TABLE "Parent";

-- DropTable
DROP TABLE "Ride";

-- CreateTable
CREATE TABLE "Arrival" (
    "id" SERIAL NOT NULL,
    "age" TEXT NOT NULL DEFAULT '',
    "name" TEXT NOT NULL DEFAULT '',
    "gender" TEXT NOT NULL DEFAULT '',
    "medic" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 0,
    "urgency" INTEGER NOT NULL DEFAULT 5,
    "verified" BOOLEAN NOT NULL DEFAULT false,
    "arrivedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Arrival_pkey" PRIMARY KEY ("id")
);
