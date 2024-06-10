import {Request,Response} from 'express';
import { PaymentService } from '../service/paymentService';


const paymentservice = new PaymentService();


export const createpayment = async (req:Request, res:Response) => {
    try{
        const pay = await paymentservice.createPayment(req.body);
        res.json(pay);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const getpayment = async (req:Request, res:Response) => {
    try{
        const payments = await paymentservice.getPaymentsByInvoiceId(req.params.invoiceId);
        res.json(payments);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}