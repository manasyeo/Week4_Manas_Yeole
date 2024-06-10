import { organization,orgAttributes } from "../models/userModels";

export class orgService{
    
    public async registerorg(data: orgAttributes): Promise<organization>{
        const Organization = await organization.create(data);
        return Organization;
    }  
}