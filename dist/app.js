"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const custRoutes_1 = require("./routes/custRoutes");
const sowRoutes_1 = __importDefault(require("./routes/sowRoutes"));
const paymentplanRoutes_1 = require("./routes/paymentplanRoutes");
const PaymentPlanLineItemRoutes_1 = require("./routes/PaymentPlanLineItemRoutes");
const invoiceRoutes_1 = require("./routes/invoiceRoutes");
const invoiceLineItemRoutes_1 = require("./routes/invoiceLineItemRoutes");
const paymentRoutes_1 = require("./routes/paymentRoutes");
const app = (0, express_1.default)();
const port = 8000;
app.use(express_1.default.json());
app.use('/', userRoutes_1.RegisterRoute);
app.use('/', custRoutes_1.customerRoutes);
app.use('/', sowRoutes_1.default);
app.use('/', paymentplanRoutes_1.paymentplanRoutes);
app.use('/', PaymentPlanLineItemRoutes_1.paymentplanlineitemRoutes);
app.use('/', invoiceRoutes_1.InvoiceRoutes);
app.use('/', invoiceLineItemRoutes_1.InvoiceItemRoutes);
app.use('/', paymentRoutes_1.PaymentRoutes);
app.listen(port, () => {
    console.log("Hii we are comfortable with nodejs");
});
//# sourceMappingURL=app.js.map