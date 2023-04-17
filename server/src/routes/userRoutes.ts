 import express from 'express';
 // import { Router } from "express";
 import { check } from 'express-validator';
 import * as userController from '../controllers/userController.js';

 const router = express.Router();

 router.post('/register', [
    check('username', 'Имя не может быть пустым').notEmpty(),
    check('password', 'Пароль должен быть длиннее 8 символов').isLength({min: 8}),
    check('email', 'Неккоректный email адрес').isEmail()],
         userController.register);
 router.post('/login', userController.login);
 router.post('/logout', userController.logout);
 router.get('/auth', userController.auth);

 export default router;