import { Router } from "express";
import { login, loguot, singup } from "../../controllers/sessionController.js";

const sessionRouter = Router();

sessionRouter.post('/login', login);
sessionRouter.post('/singup', singup);
sessionRouter.post('/logut', loguot);

export default sessionRouter;