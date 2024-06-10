"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const sequelize_1 = require("sequelize");
const pgConfig_1 = require("../postgresDB/pgConfig");
const userModels_1 = require("./userModels");
class Customer extends sequelize_1.Model {
    id;
    orgId;
    MSAValidFrom;
    MSAValidUpto;
    LegalName;
    NDASignedOn;
    ShortName;
    NDAValidFrom;
    NDAValidUpto;
    AddressId;
    DisplayName;
    IsNDASigned;
    IsMSASigned;
    MSASignedOn;
    createdAt;
    updatedAt;
}
exports.Customer = Customer;
Customer.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
    },
    orgId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: userModels_1.organization,
            key: 'id',
        },
    },
    MSAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    MSAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    LegalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    ShortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    NDAValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    NDAValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    AddressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    DisplayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    IsNDASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    IsMSASigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    MSASignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
}, {
    tableName: 'customers',
    sequelize: pgConfig_1.sequelize,
    timestamps: true, // Enable timestamps
});
//# sourceMappingURL=custModels.js.map