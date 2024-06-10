import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';

export interface InvoiceAttributes {
  id: string;
  totalInvoiceValue: number;
  sowId: string;
  status: string;
  invoiceSentOn?: Date;
  customerId: string;
  paymentReceivedOn?: Date;
  invoiceVersionNumber: number;
}

export class Invoice extends Model<InvoiceAttributes> implements InvoiceAttributes {
  public id!: string;
  public totalInvoiceValue!: number;
  public sowId!: string;
  public status!: string;
  public invoiceSentOn?: Date;
  public customerId!: string;
  public paymentReceivedOn?: Date;
  public invoiceVersionNumber!: number;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Invoice.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    totalInvoiceValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    sowId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Drafted',
    },
    invoiceSentOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,

    },
    paymentReceivedOn: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    invoiceVersionNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  },
  {
    tableName: 'invoices',
    sequelize,
  }
);
