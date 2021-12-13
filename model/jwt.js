import dotenv from 'dotenv';
dotenv.config();

import jwt from 'jsonwebtoken';

const secret = process.env.SECRET;

export const sign = (payload) => jwt.sign(payload, secret, { expiresIn: '1d'} );