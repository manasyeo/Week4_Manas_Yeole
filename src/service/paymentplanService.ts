import {PaymentPlanAttributes,PaymentPlan} from "../models/paymentplanModel";


export class PaymentPlanService{
    async registerPaymentPlan(data:PaymentPlanAttributes[]):Promise<PaymentPlan[]>{
        const createPaymentPlans = await PaymentPlan.bulkCreate(data);
        return createPaymentPlans;
    }
}


