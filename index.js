
const express = require("express");
const cors = require("cors");
const db = require("./db");
require("dotenv").config();

const app = express();

// ✅ CORS configuration
app.use(cors({
  origin: ['http://localhost:3001', 'http://localhost:3000','https://dxs8368.uta.cloud/WDM_Team8','https://dxs8368.uta.cloud/'], // your frontend URL
  credentials: true               // if you're using cookies, sessions, or auth headers
}));

app.use(express.json());

// ✅ Routes
const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const categoryRoutes = require('./routes/categoryRoutes');
const sellerRoutes = require('./routes/sellerRoutes');
const cartRoutes = require('./routes/cartRoutes');
const favouriteRoutes = require('./routes/favouriteRoutes');
const orderRoutes = require('./routes/orderRoutes');
const shippingRoutes = require('./routes/shippingRoutes');

app.use("/api/auth", authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/sellers', sellerRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api/favourites', favouriteRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/shipping', shippingRoutes);

// ✅ Fallback for unknown routes
app.use((req, res, next) => {
  console.log('Unhandled request:', req.method, req.url);
  res.status(404).json({ message: 'Not found' });
});

// ✅ Start server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
