import {Request,Response} from 'express';
import { InvoiceLineItemService } from '../service/invoiceLineItemService';


const paymentplanservice = new InvoiceLineItemService();


export const invoiceitem = async (req:Request, res:Response) => {
    try{
        const items = await paymentplanservice.InvoLineItem(req.body);
        res.json(items);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const invoiceplanline = async (req:Request, res:Response) => {
    try{
        const plan = await paymentplanservice.getLineItems(req.params.invoiceId);
        res.json(plan);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}
