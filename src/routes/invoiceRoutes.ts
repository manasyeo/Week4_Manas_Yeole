import { Router } from "express";
import { invoice } from "../controller/invoiceController";

const router = Router();

router.post('/generate',invoice);

export { router as InvoiceRoutes };