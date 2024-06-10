import { Router } from "express";
import { paymentplan} from "../controller/paymentplanController"

const router = Router();

router.post('/paymentplan',paymentplan);

export { router as paymentplanRoutes };