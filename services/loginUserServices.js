import dotenv from 'dotenv';
dotenv.config();
import bcrypt from "bcrypt";
import Prisma from '@prisma/client';
const {
    PrismaClient
} = Prisma;
import {
    sign
} from "../model/jwt.js";
import jsonwebtoken from "jsonwebtoken";

const { verify } = jsonwebtoken;

const prisma = new PrismaClient();

export class loginUserServices {
    async process(token) {
        const secret = process.env.SECRET;
        const [email, password] = Buffer.from(token, "base64")
            .toString()
            .split(":");

        const user = await prisma.users.findUnique({
            where: {
                email: email,
            },
        });

        if (user != null) {

            const result = await bcrypt.compare(password, user.password);

            if (result !== true) {
                throw ("invalid password");
            } else {
                const token = sign({
                    id: user.id,
                    email: user.email,
                    name: user.full_name,
                    type: user.type,
                });
                const verification = verify(
                    token,
                    secret,
                    function (err, decoded) {
                        if (err) {
                            throw new err();
                        } else {
                            const user_id = decoded.id;
                            const user_name = decoded.name;
                            const user_email = decoded.email;
                            const user_type = decoded.type;
                            const user_jwt = {
                                id: user_id,
                                email: user_email,
                                name: user_name,
                                type: user_type,
                                token: token
                            }
                            
                            return user_jwt;
                        }
                    }
                );
                return verification;
            }

        } else {
            throw ("email not found")
        }
    }
};