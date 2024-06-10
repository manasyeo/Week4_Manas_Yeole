"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentPlanLineItem = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
class PaymentPlanLineItem extends sequelize_1.Model {
    id;
    sowPaymentPlanId;
    sowId;
    orderId;
    particular;
    rate;
    unit;
    total;
    createdAt;
    updatedAt;
}
exports.PaymentPlanLineItem = PaymentPlanLineItem;
PaymentPlanLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'payment_plans', // Reference to the payment_plans table
            key: 'id',
        }
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'sows', // Reference to the sows table
            key: 'id',
        }
    },
    orderId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    },
    total: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize: pgConfig_1.sequelize,
    tableName: 'payment_plan_line_items',
    timestamps: true,
});
//# sourceMappingURL=PaymentPlanLineItemModels.js.map