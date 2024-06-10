"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sowController_1 = require("../controller/sowController");
const router = express_1.default.Router();
router.post("/sow", async (req, res) => (0, sowController_1.createSow)(req, res));
exports.default = router;
//# sourceMappingURL=sowRoutes.js.map