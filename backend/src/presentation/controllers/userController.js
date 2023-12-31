import userManager from "../../domain/manager/userManager.js";
import User from "../../domain/entities/user.js";

const manager = new userManager()

export const create = async(req, res, next) => {
    try {
        const user = req.body;

        if(user.password !== user.confirmPassword){
            res.status(403).send("Invalid password");
        }

        const newUser = await manager.create(user)
        const userRes = {...newUser}
        res.status(200).send({ message: "User created successfully", user: userRes})
    } catch (error) {
        next()
        throw new Error(error.message)
    }
};

export const getAll = async(req, res, next) =>{
    try {
        const query = {
            limit: +req.query.limit || 5,
            page: +req.query.page || 1,
        }

        const list = await manager.getAll(query);

        res.status(200).send({ message: 'User list was successfully', ... list })

    } catch (error) {
        throw new Error(error.message);
    }
}

export const getOne = async(req, res, next) => {
    try {
        const { email }  = req.params;
        if(!email) {
            res.status(403).send("Invalid email");

        }
        const user = await manager.getOne( email );
        
        const findUser = new User({
            'id': user._id,
            'firstName': user.firstName,
            'lastName': user.lastName,
            'email': user.email,
            'lastlogin':user.lastLogin
        })
        res.status(200).send({message: "User find successfully", findUser})
    } catch (error) {
        throw new Error(error.message)
    }
};

export const updateOne = async(req, res, next) => {
    try {
        const { email } = req.params;
        const update = req.body;
        if(!email) {
            res.status(404).send('email not found')
        }
        const user = await manager.updateOne(email, update)
        res.status(200).send({ message: "User updated successfully", user: user })
    } catch (error) {
        throw new Error(error)
    }
};

export const deleteOne = async(req, res, next) => {
    try {
        const { email } = req.params;

        if(!email) {
        res.status(404).send('email not found')
        }

        const userDeleted = await manager.deleteOne(email)
        res.status(200).send(`${userDeleted.firstname, userDeleted.email} deleted`)
    } catch (error) {
        throw new Error(error.message)
    }
}