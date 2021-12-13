import {
    createUserServices
} from '../services/createUserServices.js';
import bcrypt from "bcrypt";
  export class createUserController {
    async handle(req, res) {
      const full_name = req.body.full_name;
      const email = req.body.email;
      const password = req.body.password;
      const phone_number = req.body.phone_number;
  
      const service = new createUserServices();
  
      try {
        const hash_password = await bcrypt.hash(password, 10);
        const result = await service.execute(
          full_name,
          email,
          hash_password,
          phone_number);
        res.status(200).send(result);
  
      } catch (err) {
        res.status(500).send('Deu ruim, playba');
        console.log(err);
      }
    }
  }