"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRoutes = void 0;
const express_1 = require("express");
const paymentController_1 = require("../controller/paymentController");
const router = (0, express_1.Router)();
exports.PaymentRoutes = router;
router.post('/postpayment', paymentController_1.createpayment);
router.get('/getpayment/:invoiceId', paymentController_1.getpayment);
//# sourceMappingURL=paymentRoutes.js.map