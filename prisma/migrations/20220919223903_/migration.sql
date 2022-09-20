/*
  Warnings:

  - You are about to drop the column `createdAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `date_birth` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `history` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `Title` on the `movies` table. All the data in the column will be lost.
  - The `characters` column on the `movies` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `info` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Made the column `image` on table `characters` required. This step will fail if there are existing NULL values in that column.
  - Made the column `weight` on table `characters` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `title` to the `movies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "createdAt",
DROP COLUMN "date_birth",
DROP COLUMN "history",
DROP COLUMN "updatedAt",
ADD COLUMN     "age" INTEGER NOT NULL,
ADD COLUMN     "appearances" INTEGER[],
ADD COLUMN     "info" TEXT NOT NULL,
ALTER COLUMN "image" SET NOT NULL,
ALTER COLUMN "weight" SET NOT NULL;

-- AlterTable
ALTER TABLE "movies" DROP COLUMN "Title",
ADD COLUMN     "title" TEXT NOT NULL,
DROP COLUMN "characters",
ADD COLUMN     "characters" INTEGER[];

-- DropTable
DROP TABLE "users";

-- CreateTable
CREATE TABLE "Genre" (
    "id" SERIAL NOT NULL,
    "image" TEXT NOT NULL,
    "movies" INTEGER[],

    CONSTRAINT "Genre_pkey" PRIMARY KEY ("id")
);
