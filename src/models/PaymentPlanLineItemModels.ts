import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

export interface PaymentPlanLineItemAttributes {
    id: string;
    sowPaymentPlanId: string;
    sowId: string;
    orderId: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
}



export class PaymentPlanLineItem extends Model<PaymentPlanLineItemAttributes> implements PaymentPlanLineItemAttributes {
    public id!: string;
    public sowPaymentPlanId!: string;
    public sowId!: string;
    public orderId!: string;
    public particular!: string;
    public rate!: number;
    public unit!: number;
    public total!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PaymentPlanLineItem.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    sowPaymentPlanId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'payment_plans', 
            key: 'id',
        }
    },
    sowId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'sows', 
            key: 'id',
        }
    },
    orderId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    particular: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rate: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    unit: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    total: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'payment_plan_line_items',
    timestamps: true,
});
