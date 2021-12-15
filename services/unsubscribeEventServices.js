import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class unsubscribeEventServices {
    async execute(userid, classid) {

        const unsubscribeDB = await prisma.$queryRaw(
            Prisma.sql `DELETE FROM class_user WHERE class_id = ${classid} AND user_id = ${userid} RETURNING *`
        );

        if(unsubscribeDB.length < 1) {
            throw("notexist")
        }
        return unsubscribeDB;
    }
}