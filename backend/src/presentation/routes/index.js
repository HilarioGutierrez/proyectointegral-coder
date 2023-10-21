import {Router} from "express";
import userRouter from "./userRouter/userRouter.js";
import sessionRouter from "./sessionRouter/sessionRouter.js";

const apiRouter = Router();

apiRouter.use('/api/users', userRouter);
apiRouter.use('/api/sessions', sessionRouter);

export default apiRouter;