import { Payment, PaymentAttributes } from '../models/paymentModels';

export class PaymentService {
    async createPayment(paymentData: PaymentAttributes): Promise<Payment> {
        const payment = await Payment.create(paymentData);
        return payment;
    }

    async getPaymentsByInvoiceId(invoiceId: string): Promise<Payment[]> {
        const payments = await Payment.findAll({ where: { invoiceId } });
        return payments;
    }
}