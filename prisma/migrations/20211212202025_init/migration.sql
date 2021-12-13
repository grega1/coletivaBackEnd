-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "address_number" INTEGER NOT NULL,
    "zip_code" INTEGER NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "district" VARCHAR(255) NOT NULL,
    "federated_unity" VARCHAR(2) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" INTEGER NOT NULL,
    "members" INTEGER NOT NULL,
    "creator_id" INTEGER NOT NULL,
    "category_id" INTEGER NOT NULL,
    "class_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" INTEGER NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categories" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_user" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "class_user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Classes_creator_id_key" ON "Classes"("creator_id");

-- CreateIndex
CREATE UNIQUE INDEX "Classes_category_id_key" ON "Classes"("category_id");

-- CreateIndex
CREATE UNIQUE INDEX "class_user_class_id_key" ON "class_user"("class_id");

-- CreateIndex
CREATE UNIQUE INDEX "class_user_user_id_key" ON "class_user"("user_id");

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_creator_id_fkey" FOREIGN KEY ("creator_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Classes" ADD CONSTRAINT "Classes_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "Categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_user" ADD CONSTRAINT "class_user_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "Classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_user" ADD CONSTRAINT "class_user_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
