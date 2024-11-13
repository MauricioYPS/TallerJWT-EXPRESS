import { Router } from "express"
import { creat, creatMany } from "../controllers/invoices/create.js"
import { allInvoices, InvoiceById } from "../controllers/invoices/read.js";
import { deleteOne } from "../controllers/invoices/delete.js";
import { updateAndFindOne } from "../controllers/invoices/update.js";

const router = Router();

router.get('/all',allInvoices);
router.get('/id/:id',InvoiceById);
router.post('/creat',creat);
router.post('/creatMany',creatMany);
router.put('/update/:id',updateAndFindOne);
router.delete('/delete/:id',deleteOne);    

export default router