import express, { Request, Response } from 'express';
import { SowService } from '../service/sowService';

const router = express.Router();

const sowService = new SowService();


export const createSow = async (req: Request, res: Response) => {
    try{const sowData = req.body;
        const sow = await sowService.createSow(sowData);
        res.status(201).json(sow);}
        catch(error) {
            console.error(error);
            res.json({ message: 'Internal server error' });

        }
      
};
