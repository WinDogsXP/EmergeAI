/*
  Warnings:

  - You are about to drop the `Arrival` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Arrival";

-- CreateTable
CREATE TABLE "Parent" (
    "id" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "addressLat" DOUBLE PRECISION NOT NULL,
    "addressLong" DOUBLE PRECISION NOT NULL,
    "schoolAdress" TEXT NOT NULL,
    "schoolLat" DOUBLE PRECISION NOT NULL,
    "schoolLong" DOUBLE PRECISION NOT NULL,
    "groupId" TEXT,

    CONSTRAINT "Parent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kid" (
    "id" TEXT NOT NULL,
    "parentid" TEXT NOT NULL,
    "groupId" TEXT,

    CONSTRAINT "Kid_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Group" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Group_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ride" (
    "id" TEXT NOT NULL,
    "startLong" DOUBLE PRECISION NOT NULL,
    "startLat" DOUBLE PRECISION NOT NULL,
    "endLong" DOUBLE PRECISION NOT NULL,
    "endLat" DOUBLE PRECISION NOT NULL,
    "groupId" TEXT NOT NULL,

    CONSTRAINT "Ride_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Parent" ADD CONSTRAINT "Parent_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kid" ADD CONSTRAINT "Kid_parentid_fkey" FOREIGN KEY ("parentid") REFERENCES "Parent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Kid" ADD CONSTRAINT "Kid_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Ride" ADD CONSTRAINT "Ride_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
