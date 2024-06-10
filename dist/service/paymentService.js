"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const paymentModels_1 = require("../models/paymentModels");
class PaymentService {
    async createPayment(paymentData) {
        const payment = await paymentModels_1.Payment.create(paymentData);
        return payment;
    }
    async getPaymentsByInvoiceId(invoiceId) {
        const payments = await paymentModels_1.Payment.findAll({ where: { invoiceId } });
        return payments;
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=paymentService.js.map