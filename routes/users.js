/* Dhingra, Jayant – 1002105531
Hakkinalu Somashekaraiah, Durgashree - 1002197918
Singh, Dimple - 1002248368
Shetty, Ananya Sri – 1002184482
Tsavalam, Sashank - 1002234210 */
// routes/users.js
const express = require('express');
const router = express.Router();
const db = require('../db'); // assume you have a db connection here
const authenticateToken = require('../middleware/authMiddleware');

router.get('/currentUser', authenticateToken, async (req, res) => {
  const email = req.user.email;

  try {
    // Using async/await with a promise-based db query
    const [results] = await db.query('SELECT * FROM users WHERE Email = ?', [email]);

    if (results.length === 0) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(results[0]);
  } catch (err) {
    console.error('Database query error:', err);
    return res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
