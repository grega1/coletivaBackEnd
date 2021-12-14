import {
  getCategoriesServices
} from '../services/getCategoriesServices.js';
export class getCategoriesController {
  async handle(req, res) {
    const id = req.query.id;

    const service = new getCategoriesServices();

    try {
      const result = await service.execute(
        id);
      res.status(200).send(result);

    } catch (err) {
      res.status(500).send('Deu ruim, playba');
      console.log(err);
    }
  }
}