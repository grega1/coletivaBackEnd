import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export function isAdmin(req, res, next) {
    if (!req.cookies.token) {
        res.status(400).send({
            error: 'Você deve estar logado para acessar esta rota'
        });
    } else {
        try {
            const checkadmin = verify(req.cookies.token, process.env.SECRET);
            if (checkadmin.type != 'admin') {
                res.status(500).send({
                    error: 'Usuário não autorizado'
                });
            } else {
                next();
            }
        } catch (err) {
            res.status(400).send({
                error: 'Token inválido'
            });
        }
    }
}