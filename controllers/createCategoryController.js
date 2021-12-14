import {
    createCategoryServices
  } from '../services/createCategoryServices.js';
  export class createCategoryController {
    async handle(req, res) {
      const name = req.body.name;
      const description = req.body.description;
  
      const service = new createCategoryServices();
  
      try {
        const result = await service.execute(
          name,
          description);
        res.status(200).send(result);
  
      } catch (err) {
        res.status(500).send('Deu ruim, playba');
        console.log(err);
      }
    }
  }