import {
    deleteEventServices
} from '../services/deleteEventServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export class deleteEventController {
    async handle(req, res) {
        const id = req.params.id;
        const userid = verify(req.cookies.token, process.env.SECRET);

        const service = new deleteEventServices();

        try {
            const result = await service.execute(
                Number(id),
                Number(userid.id));
            res.status(200).send(result);

        } catch (err) {
            if (err == 'invalid user') {
                res.status(500).send({
                    error: 'Usuário não autorizado ou Classe não existe.'
                })
            } else if (err.code = 'P2025') {
                res.status(500).send({
                    error: 'Classe não existe'
                });
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }

    async handleAdmin(req, res) {
        const id = req.params.id;

        const service = new deleteEventServices();

        try {
            const result = await service.executeAdmin(
                Number(id));
            res.status(200).send(result);

        } catch (err) {
            if (err.code = 'P2025') {
                res.status(500).send({
                    error: 'Classe não existe'
                });
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }
}