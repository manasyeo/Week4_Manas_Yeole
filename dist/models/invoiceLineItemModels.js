"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceLineItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class InvoiceLineItem extends sequelize_1.Model {
    id;
    invoiceId;
    orderNo;
    particular;
    rate;
    unit;
    total;
    createdAt;
    updatedAt;
}
exports.InvoiceLineItem = InvoiceLineItem;
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'invoices',
            key: 'id'
        }
    },
    orderNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.DECIMAL(10, 2),
        allowNull: false,
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
    tableName: 'invoice_line_items',
});
//# sourceMappingURL=invoiceLineItemModels.js.map