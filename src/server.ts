import express, { Application } from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import path from "path";

import router from "./routes";

const app: Application = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", router);

// Connect to MongoDB and Start Server
mongoose
  .connect("mongodb://localhost:27017/stickynotes")
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
  )
  .catch((err) => console.error("MongoDB connection error:", err));
