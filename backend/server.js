require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const customerRoutes = require('./routes/customerRoutes');

connectDB();
const app = express();

app.use(express.json());

app.use('/api/', productRoutes)
app.use('/api/', orderRoutes)
app.use('/api/', customerRoutes)
const PORT=process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`));