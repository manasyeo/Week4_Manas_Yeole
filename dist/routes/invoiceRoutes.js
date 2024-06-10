"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceRoutes = void 0;
const express_1 = require("express");
const invoiceController_1 = require("../controller/invoiceController");
const router = (0, express_1.Router)();
exports.InvoiceRoutes = router;
router.post('/generate', invoiceController_1.invoice);
//# sourceMappingURL=invoiceRoutes.js.map