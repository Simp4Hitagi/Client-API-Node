const mysql = require("mysql2");
const dotenv = require("dotenv");


const db = mysql.createConnection({
    HOST: 'process.env.DB_HOST',
    USER: 'process.env.DB_USER',
    PASSWORD: 'process.env.DB_PASSWORD',
    DATABASE: 'process.env.DB_DATABASE'
})

export default db;