import {
  createEventServices
} from '../services/createEventServices.js';
import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;


export class createEventController {
  async handle(req, res) {
    const title = req.body.title;
    const description = req.body.description;
    const street = req.body.street;
    const address_number = req.body.address_number;
    const zip_code = req.body.zip_code;
    const city = req.body.city;
    const district = req.body.district;
    const federated_unity = req.body.federated_unity;
    const phone = req.body.phone;
    const creator_id = verify(req.cookies.token, process.env.SECRET);
    const category_id = req.body.category_id;

    const service = new createEventServices();

    try {
      const result = await service.execute(title,
        description,
        street,
        address_number,
        zip_code,
        city,
        district,
        federated_unity,
        phone,
        creator_id.id,
        category_id);
      res.status(200).send(result);

    } catch (err) {
      if (err.code == 'P2003') {
        res.status(400).send({
          error: "Usuário ou categoria não existem"
        });
      } else {
        res.status(500).send('Deu ruim, playba');
        console.log(err);
      }
    }
  }
}