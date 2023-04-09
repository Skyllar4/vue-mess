import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
dotenv.config();

export const generateToken = (payload) => {

    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {expiresIn: '1h'});
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: '30d'});

    return {
        accessToken,
        refreshToken
    }

}

// async function saveToken(userId, refreshToken) {
//         const tokenData = await
// }
