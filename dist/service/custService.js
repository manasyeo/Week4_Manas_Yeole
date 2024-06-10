"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerService = void 0;
const custModels_1 = require("../models/custModels");
class CustomerService {
    async registerCustomer(Data) {
        const customer = await custModels_1.Customer.create(Data);
        return customer;
    }
}
exports.CustomerService = CustomerService;
//# sourceMappingURL=custService.js.map