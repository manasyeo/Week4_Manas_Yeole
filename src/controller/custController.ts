import {Request,Response} from 'express';
import { CustomerService } from '../service/custService';


const customerservice = new CustomerService();


export const registercustomer = async (req:Request, res:Response) => {
    try{
        const customer = await customerservice.registerCustomer(req.body);
        res.json(customer);
    }
    catch(error){
        console.error(error);
        res.json({ message: 'Internal server error' });
    }
}