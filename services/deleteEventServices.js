import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class deleteEventServices {
    async execute(id, userid) {

        const verifyUser = await prisma.classes.findFirst({
            where: {
                id: id,
                creator_id: userid,
            }
        });

        if (verifyUser) {
            const deletedEventDB = await prisma.classes.delete({
                where: {
                    id: id
                }
            });

            const deleteUsersClass = await prisma.$queryRaw(
                Prisma.sql `DELETE FROM class_user WHERE class_id = ${id}`
            );

            return deletedEventDB;
        } else {
            throw ("invalid user");
        }
    }

    async executeAdmin(id) {

        const verifyEvent = await prisma.classes.findFirst({
            where: {
                id: id,
            }
        });

        if (verifyEvent) {
            const deletedEventDB = await prisma.classes.delete({
                where: {
                    id: id
                }
            });

            const deleteUsersClass = await prisma.$queryRaw(
                Prisma.sql `DELETE FROM class_user WHERE class_id = ${id}`
            );

            return deletedEventDB;
        } else {
            throw ("invalid class");
        }
    }
}