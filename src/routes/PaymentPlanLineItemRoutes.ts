import { Router } from "express";
import { paymentplanline,getplanitems } from "../controller/PaymentPlanLineItemController"

const router = Router();

router.post('/paymentplanlineitems',paymentplanline);
router.get('/getlist/:sowPaymentPlanId',getplanitems);

export { router as paymentplanlineitemRoutes };