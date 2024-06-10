import express from 'express';
import { RegisterController } from '../controller/userController';


const router = express.Router();

router.use('/reg',RegisterController);

export{ router as RegisterRoute};