"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentplanRoutes = void 0;
const express_1 = require("express");
const paymentplanController_1 = require("../controller/paymentplanController");
const router = (0, express_1.Router)();
exports.paymentplanRoutes = router;
router.post('/paymentplan', paymentplanController_1.paymentplan);
//# sourceMappingURL=paymentplanRoutes.js.map