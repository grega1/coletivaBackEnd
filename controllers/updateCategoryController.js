import {
    updateCategoryServices
} from '../services/updateCategoryServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export class updateCategoryController {
    async handle(req, res) {
        const id = req.params.id;
        const name = req.body.name;
        const description = req.body.description;

        const service = new updateCategoryServices();

        try {
            const result = await service.execute(
                Number(id), name, description);
            res.status(200).send(result);

        } catch (err) {
            if (err == 'invalid category') {
                res.status(500).send({
                    error: 'Categoria inválida ou usuário não autorizado.'
                })
            } else if (err.code = 'P2025') {
                res.status(500).send({
                    error: 'Categoria não existe'
                });
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }
}