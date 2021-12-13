import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
  verify
} = jsonwebtoken;

import {
  getEventsServices
} from '../services/getEventsServices.js';
export class getEventsController {
  async handle(req, res) {
    const id = req.query.id;
    const userid = verify(req.cookies.token, process.env.SECRET);

    const service = new getEventsServices();

    try {
      const result = await service.execute(
        id,
        userid.id);
      res.status(200).send(result);

    } catch (err) {
      res.status(500).send('Deu ruim, playba');
      console.log(err);
    }
  }

  async handleAdmin(req, res) {
    const userid = req.query.id;

    const service = new getEventsServices();

    try {
      const result = await service.executeAdmin(
        userid);
      res.status(200).send(result);

    } catch (err) {
      res.status(500).send('Deu ruim, playba');
      console.log(err);
    }
  }
}