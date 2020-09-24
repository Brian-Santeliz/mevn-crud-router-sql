const dotenv = require("dotenv");
dotenv.config();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASS,
  database: process.env.BD,
});
module.exports = connection;
