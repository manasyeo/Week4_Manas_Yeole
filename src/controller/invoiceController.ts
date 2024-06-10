import {Request,Response} from 'express';
import { InvoiceService } from '../service/invoiceService';


const invoiceservice = new InvoiceService();


export const invoice = async (req:Request, res:Response) => {
    try{
        const invoices = await invoiceservice.generateinvoice();
        res.json(invoices);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}