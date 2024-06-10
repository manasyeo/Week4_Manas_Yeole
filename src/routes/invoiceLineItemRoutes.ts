import { Router } from "express";
import { invoiceitem,invoiceplanline } from "../controller/invoiceLineItemController";


const router = Router();

router.post('/invoiceitems',invoiceitem);
router.get('/getinvoicelist/:invoiceId',invoiceplanline)

export { router as InvoiceItemRoutes };