"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payment = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class Payment extends sequelize_1.Model {
    id;
    paymentDate;
    forExAmount;
    currency;
    indianAmount;
    invoiceId;
    isFullPayment;
    bankPayment;
    details;
    createdAt;
    updatedAt;
}
exports.Payment = Payment;
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    paymentDate: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    forExAmount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    currency: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    indianAmount: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'invoices',
            key: 'id',
        }
    },
    isFullPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    bankPayment: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    details: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'payments',
});
//# sourceMappingURL=paymentModels.js.map