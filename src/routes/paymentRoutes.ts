import { Router } from "express";
import { createpayment,getpayment} from "../controller/paymentController"

const router = Router();

router.post('/postpayment',createpayment);

router.get('/getpayment/:invoiceId',getpayment);
export { router as PaymentRoutes };