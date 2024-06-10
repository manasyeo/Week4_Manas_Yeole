import { PaymentPlanLineItem, PaymentPlanLineItemAttributes } from '../models/PaymentPlanLineItemModels';

export class PaymentPlanLineItemService {
    async registerLineItems(data: PaymentPlanLineItemAttributes[]): Promise<PaymentPlanLineItem[]> {
        const createdLineItems = await PaymentPlanLineItem.bulkCreate(data);
        return createdLineItems;
    }

    
    async getLineItemsbyid(sowPaymentPlanId:string): Promise<PaymentPlanLineItem[]> {
        const getLineItemsbyid = await PaymentPlanLineItem.findAll({where: { sowPaymentPlanId }});
        return getLineItemsbyid;
    }
}


