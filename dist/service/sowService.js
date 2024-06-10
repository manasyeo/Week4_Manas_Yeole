"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SowService = void 0;
const sowModels_1 = require("../models/sowModels");
class SowService {
    async createSow(sowData) {
        const sow = await sowModels_1.SOW.create(sowData);
        return sow;
    }
}
exports.SowService = SowService;
//# sourceMappingURL=sowService.js.map