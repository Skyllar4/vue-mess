import db from "../db.js"

export const getUser = async (userName) => {

    return db.query(`select * from users WHERE username=\'${userName}\'`);
// протестировать, если такого пользователя не существует, прокинуть ошибку с помощью throw
}
