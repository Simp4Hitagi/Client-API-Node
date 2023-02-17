const mysql = require("mysql");
const dotenv = require("dotenv");


const db = mysql.createConnection({
    HOST: 'process.env.DB_HOST',
    USER: 'process.env.USER',
    PASSWORD: 'process.env.DB_PASSWORD',
    DATABASE: 'process.env.DB_DATABASE'
})

module.exports = db;