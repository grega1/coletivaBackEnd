import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class getUsersServices {
    async execute(id) {
        const user = await prisma.users.findFirst({
            where: {
                id: id,
            }
        });
        return user
    }
}