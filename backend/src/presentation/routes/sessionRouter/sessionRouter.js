import { Router } from "express";
import { login, logout, singup } from "../../controllers/sessionController.js";
import { changePassword, confirmToken, forgotPassword, updatePassword } from "../../controllers/passwordController.js";

const sessionRouter = Router();

sessionRouter.post('/login', login);
sessionRouter.post('/singup', singup);
sessionRouter.post('/logout', logout);
sessionRouter.post('/forgotPassword', forgotPassword);
sessionRouter.get('/confirmtoken', confirmToken)
sessionRouter.post('/change-password/:token/:email', changePassword);
sessionRouter.put('/updatePassword', updatePassword);

export default sessionRouter;