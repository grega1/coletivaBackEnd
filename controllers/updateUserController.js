import {
    updateUsersServices
} from '../services/updateUserServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export class updateUserController {
    async handle(req, res) {
        const userid = verify(req.cookies.token, process.env.SECRET);
        const full_name = req.body.full_name;
        const password = req.body.password;
        const phone_number = req.body.phone_number;

        const service = new updateUsersServices();

        try {
            const result = await service.execute(
                Number(userid.id), full_name,
                password,
                phone_number);
            res.status(200).send(result);

        } catch (err) {
            if (err == 'invalid user') {
                res.status(500).send({
                    error: 'Usuário inválido.'
                })
            } else if (err.code = 'P2025') {
                res.status(500).send({
                    error: 'Usuário não existe'
                });
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }
}