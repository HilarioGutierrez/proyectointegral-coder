import { Router } from "express";
import { create, deleteOne, getOne, updateOne } from "../../controllers/userController.js";

const userRouter = Router();

userRouter.post('/create', create);
userRouter.get('/:email', getOne);
userRouter.put('/:email', updateOne);
userRouter.delete('/:email', deleteOne);

export default userRouter;