import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;

const prisma = new PrismaClient();

export class updateEventServices {
    async execute(id, userid, title,
        description,
        street,
        address_number,
        zip_code,
        city,
        district,
        federated_unity,
        phone) {

        const verifyUser = await prisma.classes.findFirst({
            where: {
                id: id,
                creator_id: userid,
            }
        });

        if (verifyUser) {
            const updateEventDB = await prisma.classes.update({
                where: {
                    id: id,
                },
                data: {
                    title: title | verifyUser.title,
                    description: description | verifyUser.description,
                    street: street | verifyUser.street,
                    address_number: address_number | verifyUser.address_number,
                    zip_code: zip_code | verifyUser.zip_code,
                    city: city | verifyUser.city,
                    district: district | verifyUser.district,
                    federated_unity: federated_unity | verifyUser.federated_unity,
                    phone: phone | verifyUser.phone
                }
            });

            return updateEventDB;
        } else {
            throw ("invalid event");
        }
    }

    async executeAdmin(id, title,
        description,
        street,
        address_number,
        zip_code,
        city,
        district,
        federated_unity,
        phone) {

        const verifyEvent = await prisma.classes.findFirst({
            where: {
                id: id,
            }
        });

        if (verifyEvent) {
            const updateEventDB = await prisma.classes.update({
                where: {
                    id: id,
                },
                data: {
                    title: title | verifyUser.title,
                    description: description | verifyUser.description,
                    street: street | verifyUser.street,
                    address_number: address_number | verifyUser.address_number,
                    zip_code: zip_code | verifyUser.zip_code,
                    city: city | verifyUser.city,
                    district: district | verifyUser.district,
                    federated_unity: federated_unity | verifyUser.federated_unity,
                    phone: phone | verifyUser.phone
                }
            });

            return updateEventDB;
        } else {
            throw ("invalid event");
        }
    }
}