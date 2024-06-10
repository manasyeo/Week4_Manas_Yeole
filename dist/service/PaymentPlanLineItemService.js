"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlanLineItemService = void 0;
const PaymentPlanLineItemModels_1 = require("../models/PaymentPlanLineItemModels");
class PaymentPlanLineItemService {
    async registerLineItems(data) {
        const createdLineItems = await PaymentPlanLineItemModels_1.PaymentPlanLineItem.bulkCreate(data);
        return createdLineItems;
    }
    async getLineItemsbyid(sowPaymentPlanId) {
        const getLineItemsbyid = await PaymentPlanLineItemModels_1.PaymentPlanLineItem.findAll({ where: { sowPaymentPlanId } });
        return getLineItemsbyid;
    }
}
exports.PaymentPlanLineItemService = PaymentPlanLineItemService;
//# sourceMappingURL=PaymentPlanLineItemService.js.map