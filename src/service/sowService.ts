
import {SOW, SowAttributes} from  '../models/sowModels';

export class SowService{
     public async createSow(sowData:SowAttributes):Promise<SOW>{
        const sow = await SOW.create(sowData);
        return sow;
     } 
}


