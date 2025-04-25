const mysql = require("mysql2");
require("dotenv").config();

// Create MySQL connection
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  connectionLimit: 10, // Adjust based on load
});

// Promisify for async/await usage
const db = pool.promise();

module.exports = db;
