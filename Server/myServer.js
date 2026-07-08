import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

connectDB();

app.use(express.json());

// Register routes
app.use("/", userRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});