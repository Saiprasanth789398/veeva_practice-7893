import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import dotenv from "dotenv";

import auth from "./routes/AuthRoutes.js";
import productRoutes from "./routes/ProductRoutes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", auth);
app.use("/products", productRoutes);

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/registerapp")
  .then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

