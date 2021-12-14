import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export class updateUsersServices {
    async execute(id, full_name, password, phone_number) {

        const verifyUser = await prisma.users.findFirst({
            where: {
                id: id,
            }
        });

        if (verifyUser) {
            const updateUserDB = await prisma.users.update({
                where: {
                    id: id,
                },
                data: {
                    full_name: full_name | verifyUser.full_name,
                    password: await bcrypt.hash(password, 10) | verifyUser.password,
                    phone_number: phone_number | verifyUser.phone_number
                }
            });

            return updateUserDB;
        } else {
            throw ("invalid user");
        }
    }
}