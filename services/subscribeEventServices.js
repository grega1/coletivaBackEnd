import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class subscribeEventServices {
    async execute(userid, classid) {

        const verifyUser = await prisma.class_user.findFirst({
            where: {
                user_id: userid,
                class_id: classid,
            }
        })

        if (verifyUser) {
            throw ("alreadyerror")
        } else {
            const subscribeDB = await prisma.class_user.create({
                data: {
                    class_id: classid,
                    user_id: userid,
                }
            })
            return subscribeDB;
        }
    }
}