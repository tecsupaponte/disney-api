/*
  Warnings:

  - You are about to drop the column `release_date` on the `movies` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "movies" DROP COLUMN "release_date",
ALTER COLUMN "rating" SET DATA TYPE DOUBLE PRECISION;
