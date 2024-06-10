"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlanService = void 0;
const paymentplanModel_1 = require("../models/paymentplanModel");
class PaymentPlanService {
    async registerPaymentPlan(data) {
        const createPaymentPlans = await paymentplanModel_1.PaymentPlan.bulkCreate(data);
        return createPaymentPlans;
    }
}
exports.PaymentPlanService = PaymentPlanService;
//# sourceMappingURL=paymentplanService.js.map