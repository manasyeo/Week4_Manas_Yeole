"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItemService = void 0;
const invoiceLineItemModels_1 = require("../models/invoiceLineItemModels");
class InvoiceLineItemService {
    async InvoLineItem(Data) {
        const lineitem = await invoiceLineItemModels_1.InvoiceLineItem.create(Data);
        return lineitem;
    }
    async getLineItems(invoiceId) {
        const getLineItems = await invoiceLineItemModels_1.InvoiceLineItem.findAll({ where: { invoiceId } });
        return getLineItems;
    }
}
exports.InvoiceLineItemService = InvoiceLineItemService;
//# sourceMappingURL=invoiceLineItemService.js.map