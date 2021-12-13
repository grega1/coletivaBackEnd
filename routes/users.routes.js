import { Router } from "express";
import { createUserController } from '../controllers/createUserController.js';
import { deleteUserController } from "../controllers/deleteUserController.js";
import { loginUserController } from "../controllers/loginUserController.js";
import { updateUserController } from "../controllers/updateUserController.js";
import { isAdmin } from "../middlewares/isAdmin.js";
import { isLogged } from "../middlewares/isLogged.js";

const router = Router();

router.post('/createuser', new createUserController().handle);
router.delete('/deleteuser/:id', isAdmin, new deleteUserController().handle);
router.post('/login', new loginUserController().handle);
router.patch('/updateuser', isLogged, new updateUserController().handle);

export default router;