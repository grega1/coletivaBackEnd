import dotenv from 'dotenv';
dotenv.config();
import {
    loginUserServices
} from '../services/loginUserServices.js';

export class loginUserController {
    async handle(req, res) {
        const service = new loginUserServices();

        if (!req.headers.authorization) {
            res.status(500).send({
                error: 'Token de autorização não encontrado'
            });
        } else {
            const [, hash] = req.headers.authorization.split(" ");

            try {
                const result = await service.process(hash);
                console.log(result);
                res.status(200).send(result);

            } catch (err) {
                if (err == 'invalid password') {
                    res.status(400).send({
                        error: "Senha inválida"
                    });
                } else if (err == 'email not found') {
                    res.status(400).send({
                        error: 'E-mail não encontrado'
                    })
                } else {
                    res.status(500).send('Deu ruim, playba');
                    console.log(err);
                }
            }
        }
    }
}