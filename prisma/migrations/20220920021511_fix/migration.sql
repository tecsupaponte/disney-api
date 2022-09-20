/*
  Warnings:

  - You are about to drop the column `appearances` on the `characters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "characters" DROP COLUMN "appearances";

-- CreateTable
CREATE TABLE "_CharacterToMovie" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CharacterToMovie_AB_unique" ON "_CharacterToMovie"("A", "B");

-- CreateIndex
CREATE INDEX "_CharacterToMovie_B_index" ON "_CharacterToMovie"("B");

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD CONSTRAINT "_CharacterToMovie_A_fkey" FOREIGN KEY ("A") REFERENCES "characters"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CharacterToMovie" ADD CONSTRAINT "_CharacterToMovie_B_fkey" FOREIGN KEY ("B") REFERENCES "movies"("id") ON DELETE CASCADE ON UPDATE CASCADE;
