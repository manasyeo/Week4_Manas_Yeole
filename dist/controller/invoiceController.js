"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoice = void 0;
const invoiceService_1 = require("../service/invoiceService");
const invoiceservice = new invoiceService_1.InvoiceService();
const invoice = async (req, res) => {
    try {
        const invoices = await invoiceservice.generateinvoice();
        res.json(invoices);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.invoice = invoice;
//# sourceMappingURL=invoiceController.js.map