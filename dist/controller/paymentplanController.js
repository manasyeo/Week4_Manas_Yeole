"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentplan = void 0;
const paymentplanService_1 = require("../service/paymentplanService");
const paymentplanservice = new paymentplanService_1.PaymentPlanService();
const paymentplan = async (req, res) => {
    try {
        const plan = await paymentplanservice.registerPaymentPlan(req.body);
        res.json(plan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.paymentplan = paymentplan;
//# sourceMappingURL=paymentplanController.js.map