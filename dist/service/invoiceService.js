"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const paymentplanModel_1 = require("../models/paymentplanModel");
const invoiceModels_1 = require("../models/invoiceModels");
class InvoiceService {
    async generateinvoice() {
        const today = new Date().toISOString().split('T')[0];
        const paymentplan = await paymentplanModel_1.PaymentPlan.findAll({
            where: {
                plannedInvoiceDate: today,
            },
        });
        const invoices = paymentplan.map(async (plan) => {
            const invoiceData = {
                id: `INV_${Date.now()}`,
                totalInvoiceValue: plan.totalActualAmount,
                sowId: plan.sowId,
                status: 'Drafted',
                customerId: plan.customerId,
                invoiceVersionNumber: 1,
                invoiceSentOn: new Date(),
            };
            return invoiceModels_1.Invoice.create(invoiceData);
        });
        return Promise.all(invoices);
    }
}
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoiceService.js.map