"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSow = void 0;
const express_1 = __importDefault(require("express"));
const sowService_1 = require("../service/sowService");
const router = express_1.default.Router();
const sowService = new sowService_1.SowService();
const createSow = async (req, res) => {
    try {
        const sowData = req.body;
        const sow = await sowService.createSow(sowData);
        res.status(201).json(sow);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};
exports.createSow = createSow;
//# sourceMappingURL=sowController.js.map