import User from "../../domain/entities/user.js";
import { createHash } from "../../domain/utils/passwardHash.js";
import { userCreateValidation } from "../../domain/validation/userCreateValidation";
import userSchema from "../schema/userSchema.js";

class userMongooseRepository{

    async create(user) {
        try {
            const dto = {...user, password: await createHash(user.password,10)};
            userCreateValidation.parse(dto);
            const newUser = await userSchema.create(dto);

            return new User({
                'firstName': newUser.firstName,
                'lastName': newUser.lastName,
                'email': newUser.email,
                'password': "xxxxxxxxxxx",
                'lastLogin': newUser.lastLogin
            })

        } catch (error) {
            throw new error({message: error.message})
        }
    }

    async getOne(email) {
        try {
            const user = await userSchema.findOne({ email:email});
            if(!user){
                throw new Error ('Sorry, user not Found.');
            }

            return new User({
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'lastlogin':user.lastLogin
            })

        } catch (error) {
            throw new Error ({error: error.message})
        }
    }

    async updateOne(email, data) {
        try {
            const user = await userSchema.findOneAndUpdate({email:email}, data, {new:true})
            
            if(!user){
            throw new Error("User don't exist");
            }

            return new User({
                'firstName': user.firstName,
                'lastName': user.lastName,
                'email': user.email,
                'password': user.password,
                'lastLogin': user.lastLogin
            })

        } catch (error) {
            throw new Error ({error: error.message})
        }
    }

    async delete(email) {
        try {
            const user = await userSchema.findOneAndDelete({email:email}, {delete:true})

            if(!user) throw new Error({error: "User not found"});

            return `${user.email} deleted. Thank you ${user.firstName}`;

        } catch (error) {
            throw new Error ({message: error.message})
        }
    }

}

export default userMongooseRepository;