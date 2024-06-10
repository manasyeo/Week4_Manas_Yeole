"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegisterController = void 0;
const express_1 = __importDefault(require("express"));
const orgService_1 = require("../service/orgService");
const router = express_1.default.Router();
exports.RegisterController = router;
const organizationService = new orgService_1.orgService();
router.post("/", async (req, res) => {
    try {
        const organization = await organizationService.registerorg(req.body);
        res.json(organization);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});
//# sourceMappingURL=userController.js.map