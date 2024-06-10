import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';


export interface PaymentPlanAttributes {
    id: string;
    sowId: string;
    customerId: string;
    plannedInvoiceDate: Date;
    totalActualAmount: number;
}




class PaymentPlan extends Model<PaymentPlanAttributes> implements PaymentPlanAttributes {
    public id!: string;
    public sowId!: string;
    public customerId!: string;
    public plannedInvoiceDate!: Date;
    public totalActualAmount!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

PaymentPlan.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    sowId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'sows', 
            key: 'id',
        }
    },
    customerId: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: 'customers', 
            key: 'id',
        }
    },
    plannedInvoiceDate: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    totalActualAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
    }
}, {
    sequelize,
    tableName: 'payment_plans',
    timestamps: true,
}
);




export {PaymentPlan};
