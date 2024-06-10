import { Model, DataTypes, Optional } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

interface PaymentAttributes {
    id: string;
    paymentDate: Date;
    forExAmount: number;
    currency: string;
    indianAmount: number;
    invoiceId: string;
    isFullPayment: boolean;
    bankPayment: boolean;
    details?: string;
    createdAt?: Date; 
    updatedAt?: Date; 
}




export class Payment extends Model<PaymentAttributes> implements PaymentAttributes {
    public id!: string;
    public paymentDate!: Date;
    public forExAmount!: number;
    public currency!: string;
    public indianAmount!: number;
    public invoiceId!: string;
    public isFullPayment!: boolean;
    public bankPayment!: boolean;
    public details?: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Payment.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        paymentDate: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        forExAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        currency: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        indianAmount: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        invoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model:'invoices',
                key:'id',
            }
        },
        isFullPayment: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        bankPayment: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        details: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        createdAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        updatedAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
    },
    {
        sequelize,
        tableName: 'payments',
    }
);


export {PaymentAttributes};