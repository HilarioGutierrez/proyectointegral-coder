import { Router } from "express";
import { confirmUser, create, deleteOne, getAll, getOne, updateOne } from "../../controllers/userController.js";

const userRouter = Router();

userRouter.post('/create', create);
userRouter.get('/', getAll);
userRouter.get('/:email', getOne);
userRouter.put('/:email', updateOne);
userRouter.delete('/:email', deleteOne);
userRouter.put('/confirm-user/:email/:token', confirmUser)

export default userRouter;