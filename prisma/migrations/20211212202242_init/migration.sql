/*
  Warnings:

  - A unique constraint covering the columns `[class_id,user_id]` on the table `class_user` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "class_user_class_id_key";

-- DropIndex
DROP INDEX "class_user_user_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "class_user_class_id_user_id_key" ON "class_user"("class_id", "user_id");
