/*
  Warnings:

  - You are about to drop the column `catergorie_id` on the `Classes` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[creator_id]` on the table `Classes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[category_id]` on the table `Classes` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Classes" DROP COLUMN "catergorie_id",
ADD COLUMN     "category_id" SERIAL NOT NULL,
ALTER COLUMN "creator_id" DROP DEFAULT;
DROP SEQUENCE "Classes_creator_id_seq";

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_user" (
    "class_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "class_user_pkey" PRIMARY KEY ("class_id","user_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classes_creator_id_key" ON "Classes"("creator_id");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_category_id_key" ON "Classes"("category_id");

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_user" ADD CONSTRAINT "class_user_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_user" ADD CONSTRAINT "class_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
