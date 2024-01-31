import jwt from "jsonwebtoken";

export const verifyToken = (token) => {
    try {
        const decoded = jwt.verify(token, process.env.PRIVATE_KEY);
        return decoded
        
    } catch (error) {
        throw new Error('failed to verify token. '+ 'Error: '+ error.message)
    }

}