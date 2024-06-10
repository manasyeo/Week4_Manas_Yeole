import { Customer,CustomerAttributes } from "../models/custModels";

export class CustomerService{
    public async registerCustomer(Data:CustomerAttributes): Promise<Customer>{
        const customer = await Customer.create(Data);
        return customer;
    }
}