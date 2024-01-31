import userManager from "../../domain/manager/userManager.js";
import { generateToken } from "../../domain/utils/generateToken.js";
import { nodemailerForgotPass } from "../../domain/utils/nodemailerConfig.js";
import { createHash } from "../../domain/utils/passwardHash.js";
import { verifyToken } from "../../domain/utils/verifyToken.js";

export const forgotPassword = async (req, res) => {
  try {
    const manager = new userManager();
    const email = req.body.email;

    const user = await manager.getOne(email);
    req.user = user;

    if (!user) {
      res
        .status(404)
        .send({ message: "Error getting", error: "User not found" });
    }
    const token = generateToken();

    await nodemailerForgotPass(token, user.firstName, user.email);

    res.status(200).send({ message: "Success" });
  } catch (e) {
    res.status(500).send({ message: "Error getting", error: e.message });
  }
};

// passwordController.js

export const confirmToken = async (req, res) => {
  try {
    const { token, email } = req.query;
    const verify = verifyToken(token);

    if (!verify) {
      return res.status(401).send({ message: 'Invalid token' });
    }

    return res.status(200).send({ message: `Confirmed ${email}` });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: 'Internal Server Error' });
  }
};


export const changePassword = async (req, res) => {
  try {
    //VERIFICAR JWT
    const {token, email} = req.params
    
    const verify = verifyToken(token)

    if(!verify) {
      res.status(401).send('NotAuth')
    }
    res.status(200).send('Authorizated')
    
  } catch (error) {
    throw new Error(error.message);
  }
};

export const updatePassword = async(req, res, next) => {
  try {
      const { email, password, confirmPassword } = req.body
      console.log(req.body)
      const manager = new userManager();

      if(password !== confirmPassword) {
        res.status(401).send({message: 'Password invalid', error: error.message});
      }

      const hash = await createHash(password)

      const user = await manager.updateOne(email, {password: hash})
      if(!user) {
        res.status(406).send({message: 'Everything is wrong!', error: error.message});
      }
      res.status(200).send({message: 'Password updated', user: user});
  } catch (error) {
      throw new Error(error)
  }
};

