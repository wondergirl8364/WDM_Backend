/* Dhingra, Jayant – 1002105531
Hakkinalu Somashekaraiah, Durgashree - 1002197918
Singh, Dimple - 1002248368
Shetty, Ananya Sri – 1002184482
Tsavalam, Sashank - 1002234210 */
const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Extract token

  if (!token) {
    return res.status(401).json({ message: "Access Denied: No token provided" });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });

    req.user = user; // Store user info in request
    next();
  });
};

module.exports = authenticateToken;
