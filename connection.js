const mysql = require('mysql');
const dotenv = require("dotenv").config();
module.exports= mysql.createConnection ({
    host: "localhost",
    port: 3306,
    user: "root",
    password: process.env.password,
    database:"bamazonDB"
});
