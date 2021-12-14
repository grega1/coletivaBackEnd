import {
    deleteUserServices
} from '../services/deleteUserServices.js';
export class deleteUserController {
    async handle(req, res) {
        const id = req.params.id;

        const service = new deleteUserServices();

        try {
            const result = await service.execute(
                Number(id));
            res.status(200).send(result);

        } catch (err) {
            if (err == 'Vinculated Class') {
                res.status(500).send({
                    error: 'Este usuário possui classe(s) aos quais ele criou vinculadas, impossível deletar.'
            })
            } else if(err.code = 'P2025') {
                res.status(500).send({error: 'Usuário não existe'});
            } else {
                res.status(500).send('Deu ruim, playba');
            }
        }
    }
}