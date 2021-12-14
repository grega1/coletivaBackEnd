import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class createUserServices {
    async execute(full_name,
        email,
        password,
        phone_number) {
        const usersDB = prisma.users.create({
            data: {
                full_name: full_name,
                email: email,
                password: password,
                phone_number: phone_number
            }
        })
        return usersDB;
    }
}