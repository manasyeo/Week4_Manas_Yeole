"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceItemRoutes = void 0;
const express_1 = require("express");
const invoiceLineItemController_1 = require("../controller/invoiceLineItemController");
const router = (0, express_1.Router)();
exports.InvoiceItemRoutes = router;
router.post('/invoiceitems', invoiceLineItemController_1.invoiceitem);
router.get('/getinvoicelist/:invoiceId', invoiceLineItemController_1.invoiceplanline);
//# sourceMappingURL=invoiceLineItemRoutes.js.map