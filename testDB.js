/* Dhingra, Jayant – 1002105531
Hakkinalu Somashekaraiah, Durgashree - 1002197918
Singh, Dimple - 1002248368
Shetty, Ananya Sri – 1002184482
Tsavalam, Sashank - 1002234210 */
const db = require('./db');

async function testConnection() {
  try {
    const [rows] = await db.query('SELECT 1');
    console.log('✅ MySQL Connected Successfully!');
    console.log('Response:', rows);
  } catch (err) {
    console.error('❌ DB Connection Failed:', err.message);
  } finally {
    process.exit(); // Ensure the script exits
  }
}

testConnection();
