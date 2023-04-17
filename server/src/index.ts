import express from 'express';
import * as userController from './controllers/userController.js';
import router from "./routes/userRoutes.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
    res.send('<h2>htuf</h2>')
});

//app.post('/register', [
//    check('username', 'Имя не может быть пустым').notEmpty(),
//    check('password', 'Пароль должен быть длиннее 8 символов').isLength({min: 8}),
//    check('email', 'Неккоректный email адрес').isEmail()],
//    userController.register); // вынести проверки в отдельный файл?
//
//app.post('/login', userController.login);
//app.get('/auth', userController.auth);

app.listen(200, () => {
    try {
        console.log('server OK')
    } catch (error) {
        return console.log(error);
    }
});
