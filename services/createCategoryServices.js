import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class createCategoryServices {
    async execute(name,
        description,) {
        const categoryDB = await prisma.categories.create({
            data: {
                name: name,
                description: description,
            }
        })
        return categoryDB;
    }
}