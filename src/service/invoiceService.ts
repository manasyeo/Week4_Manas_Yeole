import {PaymentPlan} from "../models/paymentplanModel";
import { Invoice } from "../models/invoiceModels";


export class InvoiceService{
    async generateinvoice(){
        const today = new Date().toISOString().split('T')[0];

        const paymentplan = await PaymentPlan.findAll({
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
      
            return Invoice.create(invoiceData);
          });
          return Promise.all(invoices);
    }
}