import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class deleteCategoryServices {
    async execute(id) {

        const categoryHasClass = await prisma.classes.findMany({
            where: {
                category_id: id
            }
        })

        if (categoryHasClass.length >= 1) {
            throw ("Vinculated Category");
        } else {
            const deletedCategoryDB = await prisma.categories.delete({
                where: {
                    id: id
                }
            })
            return deletedCategoryDB;
        }
    }
}