import { InvoiceLineItem,InvoiceLineItemAttributes } from "../models/invoiceLineItemModels";

export class InvoiceLineItemService{
    public async InvoLineItem(Data:InvoiceLineItemAttributes): Promise<InvoiceLineItem>{
        const lineitem = await InvoiceLineItem.create(Data);
        return lineitem;
    }
    async getLineItems(invoiceId:string): Promise<InvoiceLineItem[]> {
        const getLineItems = await InvoiceLineItem.findAll({where: { invoiceId }});
        return getLineItems;
    }
}

