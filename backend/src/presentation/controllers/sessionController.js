import sessionManager from "../../domain/manager/sessionManager.js";

const manager = new sessionManager();

export const singup = async (req, res, next) => {
    try {
        const user = req.body;
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

        console.log('loginuser controller: ' + loginUser.data.accessToken);
    
        res.cookie('userToken', loginUser.data.accessToken,
                {
                    maxAge: 60 * 60 * 1000 , 
                    httpOnly: true
                })
                .status(200).send({message: 'success', ...loginUser.data, password: undefined});
        
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loguot = async (req, res, next) => {
    try {
        const user = req.body.email;

        req.session.destroy(err => {
            if(!err){
                res.status(200).send({message:"Success logout", user});
            }
            res.status(400).send({message:"Invalid data", error: err.message});
        });
    } catch (error) {
        throw new Error(error.message);
    }


};

