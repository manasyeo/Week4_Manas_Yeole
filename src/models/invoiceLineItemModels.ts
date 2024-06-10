import { Model, DataTypes } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

interface InvoiceLineItemAttributes {
    id: string;
    invoiceId: string;
    orderNo?: string;
    particular: string;
    rate: number;
    unit: number;
    total: number;
    createdAt?: Date;
    updatedAt?: Date;
}



export class InvoiceLineItem extends Model<InvoiceLineItemAttributes> implements InvoiceLineItemAttributes {
    public id!: string;
    public invoiceId!: string;
    public orderNo?: string;
    public particular!: string;
    public rate!: number;
    public unit!: number;
    public total!: number;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

InvoiceLineItem.init(
    {
        id: {
            type: DataTypes.STRING,
            primaryKey: true,
        },
        invoiceId: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model:'invoices',
                key : 'id'
            }
        },
        orderNo: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        particular: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rate: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        unit: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
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
        tableName: 'invoice_line_items',
    }
);

export {InvoiceLineItemAttributes}