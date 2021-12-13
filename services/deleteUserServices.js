import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class deleteUserServices {
    async execute(id) {

        const userHasClass = await prisma.classes.findMany({
            where: {
                creator_id: id
            }
        })

        if (userHasClass.length >= 1) {
            throw ("Vinculated Class");
        } else {
            const deletedUserDB = await prisma.users.delete({
                where: {
                    id: id
                }
            })
            return deletedUserDB;
        }
    }
}