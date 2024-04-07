// app.js

const express = require("express");
const connectDB = require("./config/database");
const driverRoutes = require("./driver/controller/driverController");

const app = express();

// Kết nối đến cơ sở dữ liệu MongoDB
connectDB();

app.use(express.json());
app.use("/api/driver", driverRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
