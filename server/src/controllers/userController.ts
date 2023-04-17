import { Response, Request } from "express";
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../db.js';
import * as generateToken from '../utils/generateTokens.js';
import { getUser } from "../utils/getUser.js";

export const register = async (req: Request, res: Response, next: () => void) => {
    
    try {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array());
        }

        const password = req.body.password;
        const salt = await bcrypt.genSalt(6);
        const passwordHash = await bcrypt.hash(password, salt);

        const createUser = await db.query('INSERT INTO users (username, email, password) values ($1, $2, $3) RETURNING *', [req.body.username, req.body.email, passwordHash]);

        const userName = req.body.username;
        const findUser = await getUser(userName);
        const userModel = {
            id: findUser.rows[0].id,
            username: findUser.rows[0].username
        };

        const tokens = generateToken.generateToken(userModel);
        await generateToken.saveToken(userModel.id, tokens.refreshToken);

        // нужно сделать логин после реги
        // проверка на то, что юзер уже существует
        // перебить на сервис?

        res.json({
            token: tokens.refreshToken
        });
//
//        res.json({
//            createUser,
//            ...tokens
//        });


    } catch (error) {
        console.log(error)
        res.status(500).json({
            message: "Не удалось зарегистрироваться",
        });
    }
}

export const login = async (req: Request, res: Response, next: () => void) => {
    
    try {

        const userName = req.body.username;
        const findUser = await getUser(userName);
        const unHashUserPassword = await bcrypt.compare(req.body.password, findUser.rows[0].password);
        // compare сравнивает хэшированный пароль и тот, что прилетел в запросе

        if (!unHashUserPassword) {
            return res.status(403).json({
                message: "Неверный логин или пароль"
            });
        }

        const token = jwt.sign(
            {
                id: findUser.rows[0].id
            },
                'secretHash',
            {
                expiresIn: '30d',
            },
        );

        res.json({
            findUser,
            token
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Неверное имя пользователя или пароль",
        });
    }

}

export const logout = async (req: Request, res: Response, next: () => void) => {
    try {
        const tokens = generateToken.generateToken()
//        const a = await generateToken.saveToken(1, '');
        res.json({
            message: tokens
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
           message: "Что-то пошло не так, повторите попытку"
        });
    }
}

export const auth = async (req: Request, res: Response, next: () => void) => {
    res.send('<h2>ауз</h2>');
}
