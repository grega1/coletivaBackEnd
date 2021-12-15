import {
    unsubscribeEventServices
} from '../services/unsubscribeEventServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;
export class unsubscribeEventController {
    async handle(req, res) {
        const userid = verify(req.cookies.token, process.env.SECRET);
        const classid = req.body.classid;

        const service = new unsubscribeEventServices();

        try {
            const result = await service.execute(
                userid.id,
                Number(classid));
            res.status(200).send(result);

        } catch (err) {
            if (err.code == 'P2003') {
                res.status(500).send({
                    error: 'Classe ou Usuário não existe.'
                })
            } else if (err = "notexist") {
                res.status(400).send({
                    error: 'Você não está cadastrado nessa classe.'
                })
            } else {
                res.status(500).send('Deu ruim, playba');
                console.log(err);
            }
        }
    }
}