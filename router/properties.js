import { Router } from "express"
import { allProperties, propertiesById } from "../controllers/properties/read.js";
import { deleteOne } from "../controllers/properties/delete.js";
import { creat, creatMany } from "../controllers/properties/create.js";
import { updateAndFindOne } from "../controllers/properties/update.js";

const router = Router();

router.get('/all',allProperties);
router.get('/property/:id',propertiesById);
router.post('/creat',creat);
router.post('/creatMany',creatMany);
router.put('/update/:id',updateAndFindOne);
router.delete('/delete/:id',deleteOne);    

export default router