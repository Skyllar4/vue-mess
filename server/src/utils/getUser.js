import db from "../db.js"

export const getUser = async (userName) => {

    return db.query(`select * from users WHERE username=\'${userName}\'`);

}
