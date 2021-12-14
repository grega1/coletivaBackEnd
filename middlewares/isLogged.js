import jsonwebtoken from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

const {
    verify
} = jsonwebtoken;

export function isLogged(req, res, next) {
    if (!req.cookies.token) {
        res.status(400).send({
            error: 'Você deve estar logado para acessar esta rota'
        });
    } else {
        try {
            verify(req.cookies.token, process.env.SECRET);
            next();
        } catch (err) {
            res.status(400).send({
                error: 'Token inválido'
            });
        }
    }
}