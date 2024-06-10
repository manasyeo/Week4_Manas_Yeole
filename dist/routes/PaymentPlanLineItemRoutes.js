"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentplanlineitemRoutes = void 0;
const express_1 = require("express");
const PaymentPlanLineItemController_1 = require("../controller/PaymentPlanLineItemController");
const router = (0, express_1.Router)();
exports.paymentplanlineitemRoutes = router;
router.post('/paymentplanlineitems', PaymentPlanLineItemController_1.paymentplanline);
router.get('/getlist/:sowPaymentPlanId', PaymentPlanLineItemController_1.getplanitems);
//# sourceMappingURL=PaymentPlanLineItemRoutes.js.map