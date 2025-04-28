/* Dhingra, Jayant – 1002105531
Hakkinalu Somashekaraiah, Durgashree - 1002197918
Singh, Dimple - 1002248368
Shetty, Ananya Sri – 1002184482
Tsavalam, Sashank - 1002234210 */
const multer = require('multer');

// Store file in memory as buffer
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;
