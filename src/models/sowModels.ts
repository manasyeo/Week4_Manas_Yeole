import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';


export interface SowAttributes {
  id: string;
 invoiceEmailAddresses: string[];
 customerId: string;
 customerPONumber: string;
 title: string;
 customerSONumber: string;
 validityPeriod: {
    validFrom: Date;
    validUpto: Date;
  };
  totalValue: number;
  currency: string;
  createdAt?: Date;
  updatedAt?: Date;
}




class SOW extends Model<SowAttributes> implements SowAttributes {
    public id!: string;
    public invoiceEmailAddresses!: string[];
    public customerId!: string;
    public customerPONumber!: string;
    public title!: string;
    public customerSONumber!: string;
    public validityPeriod!: {
      validFrom: Date;
      validUpto: Date;
    };
    public totalValue!: number;
    public currency!: string;


public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SOW.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
    invoiceEmailAddresses: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      customerId: {
        type: DataTypes.STRING,
        references: {
          model: 'customers',
          key: 'id',
        },
        allowNull: false,
      },
      customerPONumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      customerSONumber: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      validityPeriod: {
        type: DataTypes.JSONB,
        allowNull: false,
      },
      totalValue: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      currency: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    }, {
      tableName: 'sows',
      sequelize,
      timestamps: true,
    }
);




export { SOW };
