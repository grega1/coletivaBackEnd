-- CreateTable
CREATE TABLE "Classes" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" VARCHAR(255) NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "adress_number" VARCHAR(255) NOT NULL,
    "city" VARCHAR(255) NOT NULL,
    "district" VARCHAR(255) NOT NULL,
    "zip_code" VARCHAR(50) NOT NULL,
    "federated_unity" VARCHAR(2) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "phone" VARCHAR(50) NOT NULL,
    "members" INTEGER NOT NULL,
    "creator_id" SERIAL NOT NULL,
    "catergorie_id" SERIAL NOT NULL,
    "class_deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" SERIAL NOT NULL,
    "full_name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "phone_number" VARCHAR(255) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);
