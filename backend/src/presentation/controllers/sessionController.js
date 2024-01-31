import { Error } from "mongoose";
import sessionManager from "../../domain/manager/sessionManager.js";

const manager = new sessionManager();

export const singup = async (req, res, next) => {
    try {
        const user = req.body;

        if(user.password !== user.confirmPassword) {
            throw new Error("Sorry, don't match the password");
        }
        const newUser = await manager.singup(user);
        res.status(201).send( { message: "Success", newUser} );

        if(!newUser)
        {res.status(404).send( { message: 'User already exists or invalid data'})} 
        
    } catch (error) {
        throw new Error(error.message);
    }

};

export const login = async (req, res, next) => {
    
    try {
        const user = req.body;
        const loginUser = await manager.login(user);
        res.cookie('userToken', loginUser.data.accessToken,
                {
                    maxAge: 60 * 60 * 1000 , 
                    httpOnly: true
                })
                .status(200)
                .json({success: true, redirectUrl: '/', data: loginUser});
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    try {

        req.session.destroy(err =>{
            if(!err){
                res.status(200).send({message: `Logout successfully`});
            }else{
                res.status(500).send({message: 'error', error: err.message});
            }
        });
    } 
    catch (e) {
        next(e);
    }
};

