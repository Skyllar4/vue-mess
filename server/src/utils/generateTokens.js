import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import db from '../db.js';
dotenv.config();

export const generateToken = (payload) => {

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

    return {
        accessToken,
        refreshToken
    }

}

 export const saveToken = async (userId, refreshToken) => {

//    const tokenData = await db.query(`SELECT * FROM USERS WHERE id=$1`, [userId]);
//
//    if (tokenData) {
//        const saveToken = await db.query('UPDATE tokenList SET refreshToken=$1 WHERE userId=$2', [refreshToken, userId]);
//        return;
//    }

     const tokenCreate = await db.query('INSERT INTO tokenList (userId, refreshToken) values ($1, $2) RETURNING *', [userId, refreshToken]);

 }
