import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
  verify
} = jsonwebtoken;

import {
  getUsersServices
} from '../services/getUsersServices.js';
export class getUsersController {
  async handle(req, res) {
    const userid = verify(req.cookies.token, process.env.SECRET);

    const service = new getUsersServices();

    try {
      const result = await service.execute(
        userid.id);
      res.status(200).send(result);

    } catch (err) {
      res.status(500).send('Deu ruim, playba');
      console.log(err);
    }
  }

  async handleAdmin(req, res) {
    const userid = req.query.id

    const service = new getUsersServices();

    try {
      const result = await service.execute(
        userid);
      res.status(200).send(result);

    } catch (err) {
      res.status(500).send('Deu ruim, playba');
      console.log(err);
    }
  }
}