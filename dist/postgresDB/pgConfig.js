"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    username: 'postgres',
    host: '127.0.0.1',
    database: 'organization',
    password: 'Manas@28',
    port: 5432,
    //dialect 
    dialect: "postgres"
});
exports.sequelize = sequelize;
sequelize.authenticate().then(() => {
    console.log("Database connection established successfully");
})
    .catch((err) => {
    console.log("Unable to connect to the Database", err);
});
sequelize.sync()
    .then(() => {
    console.log("Model synchronized with the database");
})
    .catch((err) => {
    console.log("Unable to synchronized with the database", err);
});
//# sourceMappingURL=pgConfig.js.map