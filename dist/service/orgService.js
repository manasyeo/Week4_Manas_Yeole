"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orgService = void 0;
const userModels_1 = require("../models/userModels");
class orgService {
    async registerorg(data) {
        const Organization = await userModels_1.organization.create(data);
        return Organization;
    }
}
exports.orgService = orgService;
//# sourceMappingURL=orgService.js.map