import express,{Request,Response} from 'express';
import { RegisterRoute } from './routes/userRoutes';
import { customerRoutes } from './routes/custRoutes';
import sowRoutes from './routes/sowRoutes';
import { paymentplanRoutes } from "./routes/paymentplanRoutes";
import { paymentplanlineitemRoutes } from "./routes/PaymentPlanLineItemRoutes";
import { InvoiceRoutes } from './routes/invoiceRoutes';
import { InvoiceItemRoutes } from './routes/invoiceLineItemRoutes';
import { PaymentRoutes } from './routes/paymentRoutes';

const app = express();
const port = 8000;

app.use(express.json());

app.use('/', RegisterRoute);
app.use('/',customerRoutes);
app.use('/',sowRoutes);
app.use('/',paymentplanRoutes);
app.use('/',paymentplanlineitemRoutes);
app.use('/',InvoiceRoutes);
app.use('/',InvoiceItemRoutes);
app.use('/',PaymentRoutes);

app.listen(port, ()=>{
    console.log("Hii we are comfortable with nodejs");
})