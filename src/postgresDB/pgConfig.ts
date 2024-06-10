import {Sequelize} from 'sequelize';


const sequelize = new Sequelize({
    username: 'postgres',
    host: '127.0.0.1',
    database: 'organization',
    password: 'Manas@28',
    port: 5432,
    
    dialect: "postgres"
}); 

sequelize.authenticate().then(()=>{
    console.log("Database connection established successfully");
})
.catch((err)=>{
    console.log("Unable to connect to the Database",err);
});


sequelize.sync()
.then(()=>{
    console.log("Model synchronized with the database");
})
.catch((err)=>{
    console.log("Unable to synchronized with the database",err);
});


export { sequelize };
