/* Dhingra, Jayant – 1002105531
Hakkinalu Somashekaraiah, Durgashree - 1002197918
Singh, Dimple - 1002248368
Shetty, Ananya Sri – 1002184482
Tsavalam, Sashank - 1002234210 */
const mysql = require('mysql2/promise');
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  port: process.env.DB_PORT
});

module.exports = db;
