-- AlterTable
ALTER TABLE "characters" ADD COLUMN     "date_birth" TIMESTAMP(3),
ADD COLUMN     "history" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "weight" DOUBLE PRECISION;

-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "Title" TEXT NOT NULL,
    "release_date" TIMESTAMP(3) NOT NULL,
    "rating" INTEGER NOT NULL,
    "characters" TEXT[],

    CONSTRAINT "movies_pkey" PRIMARY KEY ("id")
);
