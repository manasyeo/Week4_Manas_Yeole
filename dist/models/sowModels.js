"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SOW = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class SOW extends sequelize_1.Model {
    id;
    invoiceEmailAddresses;
    customerId;
    customerPONumber;
    title;
    customerSONumber;
    validityPeriod;
    totalValue;
    currency;
    createdAt;
    updatedAt;
}
exports.SOW = SOW;
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceEmailAddresses: {
        type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
        allowNull: false,
    },
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: 'customers',
            key: 'id',
        },
        allowNull: false,
    },
    customerPONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    customerSONumber: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    validityPeriod: {
        type: sequelize_1.DataTypes.JSONB,
        allowNull: false,
    },
    totalValue: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    tableName: 'sows',
    sequelize: pgConfig_1.sequelize,
    timestamps: true,
});
//# sourceMappingURL=sowModels.js.map