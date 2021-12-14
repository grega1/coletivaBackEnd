import {
    updateEventServices
} from '../services/updateEventServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export class updateEventController {
    async handle(req, res) {
        const id = req.params.id;
        const userid = verify(req.cookies.token, process.env.SECRET);
        const title = req.body.title;
        const description = req.body.description;
        const street = req.body.street;
        const address_number = req.body.address_number;
        const zip_code = req.body.zip_code;
        const city = req.body.city;
        const district = req.body.district;
        const federated_unity = req.body.federated_unity;
        const phone = req.body.phone;

        const service = new updateEventServices();

        try {
            const result = await service.execute(
                Number(id),
                Number(userid.id), title,
                description,
                street,
                address_number,
                zip_code,
                city,
                district,
                federated_unity,
                phone);
            res.status(200).send(result);

        } catch (err) {
            if (err == 'invalid event') {
                res.status(500).send({
                    error: 'Classe inválida ou usuário não autorizado.'
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
        const title = req.body.title;
        const description = req.body.description;
        const street = req.body.street;
        const address_number = req.body.address_number;
        const zip_code = req.body.zip_code;
        const city = req.body.city;
        const district = req.body.district;
        const federated_unity = req.body.federated_unity;
        const phone = req.body.phone;

        const service = new updateEventServices();

        try {
            const result = await service.executeAdmin(
                Number(id),
                title,
                description,
                street,
                address_number,
                zip_code,
                city,
                district,
                federated_unity,
                phone);
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