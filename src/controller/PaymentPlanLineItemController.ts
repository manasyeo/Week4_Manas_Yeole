import {Request,Response} from 'express';
import { PaymentPlanLineItemService } from '../service/PaymentPlanLineItemService';


const paymentplanslinervice = new PaymentPlanLineItemService();


export const paymentplanline = async (req:Request, res:Response) => {
    try{
        const plan = await paymentplanslinervice.registerLineItems(req.body);
        res.json(plan);
    }
    catch(error){
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
}


export const getplanitems = async (req:Request, res:Response) => {
    try{
        
        const payments = await paymentplanslinervice.getLineItemsbyid(req.params.sowPaymentPlanId );
        res.json(payments);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}