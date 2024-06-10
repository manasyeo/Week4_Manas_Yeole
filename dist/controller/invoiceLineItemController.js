"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invoiceplanline = exports.invoiceitem = void 0;
const invoiceLineItemService_1 = require("../service/invoiceLineItemService");
const paymentplanservice = new invoiceLineItemService_1.InvoiceLineItemService();
const invoiceitem = async (req, res) => {
    try {
        const items = await paymentplanservice.InvoLineItem(req.body);
        res.json(items);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.invoiceitem = invoiceitem;
const invoiceplanline = async (req, res) => {
    try {
        const plan = await paymentplanservice.getLineItems(req.params.invoiceId);
        res.json(plan);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.invoiceplanline = invoiceplanline;
//# sourceMappingURL=invoiceLineItemController.js.map