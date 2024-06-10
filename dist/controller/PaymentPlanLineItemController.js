"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getplanitems = exports.paymentplanline = void 0;
const PaymentPlanLineItemService_1 = require("../service/PaymentPlanLineItemService");
const paymentplanslinervice = new PaymentPlanLineItemService_1.PaymentPlanLineItemService();
const paymentplanline = async (req, res) => {
    try {
        const plan = await paymentplanslinervice.registerLineItems(req.body);
        res.json(plan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.paymentplanline = paymentplanline;
const getplanitems = async (req, res) => {
    try {
        const payments = await paymentplanslinervice.getLineItemsbyid(req.params.sowPaymentPlanId);
        res.json(payments);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getplanitems = getplanitems;
//# sourceMappingURL=PaymentPlanLineItemController.js.map