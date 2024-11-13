import { Router } from "express";
import usersRouter from "./users.js";
import invoicesRouter from "./invoices.js";
import propertiesRouter from "./properties.js";

const router = Router();

router.use('/users',usersRouter)
router.use('/invoices',invoicesRouter)
router.use('/properties',propertiesRouter)


export default router