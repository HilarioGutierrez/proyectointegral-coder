import {Router} from "express";
import userRouter from "./userRouter/userRouter.js";

const apiRouter = Router();

apiRouter.use('/api/users', userRouter)

export default apiRouter;