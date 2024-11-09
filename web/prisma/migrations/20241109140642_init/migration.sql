-- CreateTable
CREATE TABLE "Arrival" (
    "id" SERIAL NOT NULL,
    "age" TEXT NOT NULL DEFAULT '',
    "medic" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL,
    "arrivedAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Arrival_pkey" PRIMARY KEY ("id")
);
