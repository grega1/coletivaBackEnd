import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class getEventsServices {
    async execute(id, userid) {

        if (id) {
            const events = await prisma.classes.findFirst({
                where: {
                    id: id,
                    creator_id: userid,
                }
            });
            return events
        } else {
            const events = await prisma.classes.findMany({
                where: {
                    id: id,
                    creator_id: userid,
                }
            });
            return events
        }

    }

    async executeAdmin(userid) {

        if (userid) {
            const events = await prisma.classes.findFirst({
                where: {
                    id: userid
                }
            });
            return events
        } else {
            const events = await prisma.classes.findMany({
                where: {
                    id: userid
                }
            });
            return events
        }

    }
}