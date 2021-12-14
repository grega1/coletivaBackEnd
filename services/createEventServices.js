import Prisma from '@prisma/client';
const {
  PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class createEventServices {
  async execute(title,
    description,
    street,
    address_number,
    zip_code,
    city,
    district,
    federated_unity,
    phone,
    creator_id,
    category_id) {
    const classesDB = await prisma.classes.create({
      data: {
        title: title,
        description: description,
        street: street,
        address_number: address_number,
        zip_code: zip_code,
        city: city,
        district: district,
        federated_unity: federated_unity,
        phone: phone,
        members: 0,
        creator_id: creator_id,
        category_id: category_id
      }
    })
    return classesDB;
  }
}