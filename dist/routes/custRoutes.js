"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customerRoutes = void 0;
const express_1 = require("express");
const custController_1 = require("../controller/custController");
const router = (0, express_1.Router)();
exports.customerRoutes = router;
router.post('/register', custController_1.registercustomer);
//# sourceMappingURL=custRoutes.js.map