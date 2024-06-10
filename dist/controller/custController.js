"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registercustomer = void 0;
const custService_1 = require("../service/custService");
const customerservice = new custService_1.CustomerService();
const registercustomer = async (req, res) => {
    try {
        const customer = await customerservice.registerCustomer(req.body);
        res.json(customer);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.registercustomer = registercustomer;
//# sourceMappingURL=custController.js.map