import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class getCategoriesServices {
    async execute(id) {

        if (id) {
            const categories = await prisma.categories.findFirst({
                where: {
                    id: id,
                }
            });
            return categories
        } else {
            const categories = await prisma.categories.findMany({});
            return categories
        }

    }
}