import { Router } from "express";
import { allUsers, usersbyId } from "../controllers/users/read.js";
import { deleteOne } from "../controllers/users/delete.js";
import { register, registerMany } from "../controllers/users/register.js";
import { updateAndFindOne } from "../controllers/users/update.js";
import account_exist from "../middlewares/account_exist.js";
import validator from "../middlewares/validator.js";
import schemaUserRegister from "../schemas/users/register.js";
const router = Router();

router.get('/all',allUsers);
router.get('/user/:id',usersbyId);
router.post('/register',validator(schemaUserRegister),account_exist,register);
router.post('/registerMany',validator(schemaUserRegister),account_exist,registerMany);
router.put('/update/:id',updateAndFindOne);
router.delete('/delete/:id',deleteOne);    

export default router