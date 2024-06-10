"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getpayment = exports.createpayment = void 0;
const paymentService_1 = require("../service/paymentService");
const paymentservice = new paymentService_1.PaymentService();
const createpayment = async (req, res) => {
    try {
        const pay = await paymentservice.createPayment(req.body);
        res.json(pay);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createpayment = createpayment;
const getpayment = async (req, res) => {
    try {
        const payments = await paymentservice.getPaymentsByInvoiceId(req.params.invoiceId);
        res.json(payments);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.getpayment = getpayment;
//# sourceMappingURL=paymentController.js.map