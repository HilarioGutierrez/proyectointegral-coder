import { generateToken } from "../utils/generateToken.js";
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
            const newUser = await this.manager.create(user);
    
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

            await this.manager.updateOne(email,{lastLogin: new Date()})

            const accessToken = generateToken(user);

            const data = { ...user, lastLogin: new Date().toDateString(), accessToken}

            return {message: 'Success', data: data};

        } catch (error) {
            throw new Error(error.message);
        }
    }
}

export default sessionManager