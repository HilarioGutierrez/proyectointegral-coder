import { Router } from "express";
import { login, loguot, singup } from "../../controllers/sessionController.js";
import { changePassword, forgotPassword, updatePassword } from "../../controllers/passwordControler.js";

const sessionRouter = Router();

sessionRouter.post('/login', login);
sessionRouter.post('/singup', singup);
sessionRouter.post('/logut', loguot);
sessionRouter.post('/forgotPassword', forgotPassword);
sessionRouter.get('/change-password', changePassword);
sessionRouter.get('/updatePassword', updatePassword);
// sessionRouter.post('update-password', updatePassword);

export default sessionRouter;