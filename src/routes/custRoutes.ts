import { Router } from "express";
import { registercustomer } from "../controller/custController";

const router = Router();

router.post('/register',registercustomer);

export { router as customerRoutes };