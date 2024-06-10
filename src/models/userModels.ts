import {DataTypes,Model,Optional} from 'sequelize';
import { sequelize } from '../postgresDB/pgConfig';



export interface orgAttributes{
    id: string;
    gstNo: string;
    panNo: string;
    legalOrganizationName: string;
    invoiceTemplateId: string;
    shortName: string;
    contactName: string;
    displayName: string;
    email: string;
    addressId: string;
    phone: string;
}

type OrgCreationAttributes = Optional<orgAttributes, 'id'>;

class organization extends Model<OrgCreationAttributes,orgAttributes> implements orgAttributes{
    public id!: string;
  public gstNo!: string;
  public panNo!: string;
  public legalOrganizationName!: string;
  public invoiceTemplateId!: string;
  public shortName!: string;
  public contactName!: string;
  public displayName!: string;
  public email!: string;
  public addressId!: string;
  public phone!: string;
}


organization.init(
    {
        id: {
            type: DataTypes.STRING,
           
            primaryKey: true,
          },
          gstNo: {
            type: DataTypes.STRING,
            allowNull: false,
            
          },
          panNo: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          legalOrganizationName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          invoiceTemplateId: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          shortName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contactName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          displayName: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          addressId: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          phone: {
            type: DataTypes.STRING,
            allowNull: false,
          },
        
        },
          {
          tableName: 'organizations',
          timestamps: true,
          sequelize, 
          modelName:'Organization',
          underscored: true
          }
   
);


export { organization };