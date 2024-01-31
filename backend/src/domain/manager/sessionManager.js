import { generateToken } from "../utils/generateToken.js";
import { nodemailerConfirmUser } from "../utils/nodemailerConfig.js";
import { createHash, isValidPassword } from "../utils/passwardHash.js"
import { loginValidation } from "../validation/session/loginValidation.js";
import { userCreateValidation } from "../validation/userCreateValidation.js"
import userManager from "./userManager.js"

class sessionManager{

    constructor (){
        this.manager = new userManager()
    }

    async singup (user) {
        try {
            userCreateValidation.parse(user);
            const token = generateToken()
            const newUser = await this.manager.create(user);
            

            await nodemailerConfirmUser(token,newUser.firstName, newUser.email);

            return newUser;
            
        } catch (error) {
            throw new Error(error.message);
        }
    }

    async login (userData) {
        try {
            const { email, password } = userData;
            const bodyValidation = await loginValidation.parseAsync(userData)

            const user = await this.manager.getOne(email);
            const isValid = await isValidPassword(password, user.password);

            if(!isValid){
                return {message: 'Error', error: 'invalid password'};
            }

            if(!user.confirmUser){
                throw Error ('User is not confirmed');
            }

            await this.manager.updateOne(email,{lastLogin: new Date()})

            const accessToken = generateToken(user);

            const data = { ...user, accessToken, lastLogin: new Date().toDateString() }

            return {message: 'Success', data: data};

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default sessionManager