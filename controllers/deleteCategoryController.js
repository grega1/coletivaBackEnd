import {
    deleteCategoryServices
} from '../services/deleteCategoryServices.js';
export class deleteCategoryController {
    async handle(req, res) {
        const id = req.params.id;

        const service = new deleteCategoryServices();

        try {
            const result = await service.execute(
                Number(id));
            res.status(200).send(result);

        } catch (err) {
            if (err == 'Vinculated Category') {
                res.status(500).send({
                    error: 'Esta categoria possui classe(s) aos quais está vinculada, impossível deletar.'
            })
            } else if(err.code = 'P2025') {
                res.status(500).send({error: 'Categoria não existe'});
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }
}