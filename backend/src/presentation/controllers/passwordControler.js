import userManager from "../../domain/manager/userManager.js";
import { generateToken } from "../../domain/utils/generateToken.js";
import { nodemailerConfig } from "../../domain/utils/nodemailerConfig.js";

export const forgotPassword = async (req, res) => {
    try {
        const manager = new userManager();
        const email = req.body.email;

        const user = await manager.getOne(email);
        req.user = user;
        console.log(req.user);

        if(!user) {
            res.status(404).send({message: "Error getting", error: "User not found"});
        }
            const forgotToken = generateToken();

            await nodemailerConfig(forgotToken, user.firstName, user.email);

            res.status(200).send({message: 'Success'});
    } catch (e) {
        res.status(500).send({message:'Error getting', error: e.message});
    }
};

export const changePassword = async (req, res) => {
    try {
        const manager = new userManager();

        const token = req.query.token;
        const email = req.query.email;
        
        const user = await manager.getOne(email);

        if(!user) {
            res.status(404).send('ERROR: Invalid');
        }
        res.status(200).send({message: user.email + " success"})
        
    } catch (error) {
        throw new Error(error.message)
    }
};

export const updatePassword = async (req, res) => {
    try {
        const manager = new userManager();
        const email = req.query.email;
    
        const password= req.body.password;
        const confirmPassword = req.query.confirmPassword;
    
        if(password !== confirmPassword) {
            alert('Please enter your password in the form below and try again');
        }
        const user = await manager.updateOne(email, password);
        res.status(200).send({message:`Update success. User:${user.email}`})
        
    } catch (error) {
        throw new Error(error.message)
    }
};