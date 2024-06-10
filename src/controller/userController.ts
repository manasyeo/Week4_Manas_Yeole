import express,{Request,Response} from 'express';
import { orgService } from '../service/orgService';


const router = express.Router();
const organizationService = new orgService();

router.post("/",async(req:Request,res:Response) =>{
        try{
        const organization = await organizationService.registerorg(req.body);
        res.json(organization);
        }
        catch (error) {
            console.error(error);
            res.json({ message: 'Internal server error' });
        }
    });

export { router as RegisterController };