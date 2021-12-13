import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class updateCategoryServices {
    async execute(id, name, description) {

        const verifyCategory = await prisma.categories.findFirst({
            where: {
                id: id,
            }
        });

        if (verifyCategory) {
            const updateCategoryDB = await prisma.classes.update({
                where: {
                    id: id,
                },
                data: {
                    name: name | verifyCategory.name,
                    description: description | verifyCategory.description,
                }
            });

            return updateCategoryDB;
        } else {
            throw ("invalid category");
        }
    }
}