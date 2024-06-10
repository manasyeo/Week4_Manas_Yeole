import {Request,Response} from 'express';
import { PaymentPlanService } from '../service/paymentplanService';


const paymentplanservice = new PaymentPlanService();


export const paymentplan = async (req:Request, res:Response) => {
    try{
        const plan = await paymentplanservice.registerPaymentPlan(req.body);
        res.json(plan);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}