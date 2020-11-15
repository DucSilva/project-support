/* eslint-disable no-undef */
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
module.exports = (req, res, next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']; // Express headers are auto coverted to lowercase 
    if (token.startsWith('Bearer ')) {
        //Remove Bearer from string
        token = token.slice(7, token.length);
    }

    if (token) {
        jwt.verify(token, process.env.KEY, (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Authorization failed',
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        return res.status(401).json({
            message: 'Authorization failed',
        });
    }
}
