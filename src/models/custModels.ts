import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';
import { organization } from './userModels';

export interface CustomerAttributes {
  id: string;
  orgId: string;
  MSAValidFrom: Date;
  MSAValidUpto: Date;
  LegalName: string;
  NDASignedOn: Date;
  ShortName: string;
  NDAValidFrom: Date;
  NDAValidUpto: Date;
  AddressId: string;
  DisplayName: string;
  IsNDASigned: boolean;
  IsMSASigned: boolean;
  MSASignedOn: Date;
}

type CustomerCreationAttributes = Optional<CustomerAttributes, 'id'>;

class Customer extends Model<CustomerAttributes, CustomerCreationAttributes> implements CustomerAttributes {
  public id!: string;
  public orgId!: string;
  public MSAValidFrom!: Date;
  public MSAValidUpto!: Date;
  public LegalName!: string;
  public NDASignedOn!: Date;
  public ShortName!: string;
  public NDAValidFrom!: Date;
  public NDAValidUpto!: Date;
  public AddressId!: string;
  public DisplayName!: string;
  public IsNDASigned!: boolean;
  public IsMSASigned!: boolean;
  public MSASignedOn!: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Customer.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    orgId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: organization,
        key: 'id',
      },
    },
    MSAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    MSAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    LegalName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    ShortName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NDAValidFrom: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    NDAValidUpto: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    AddressId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    IsNDASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    IsMSASigned: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    MSASignedOn: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: 'customers',
    sequelize,
    timestamps: true, 
  }
);

export { Customer };
