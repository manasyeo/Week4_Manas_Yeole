import express from 'express';
import {createSow} from '../controller/sowController'

const router = express.Router();

router.post("/sow", async(req,res)=>createSow(req,res));

export default router;
