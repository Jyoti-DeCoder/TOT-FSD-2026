import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import User from "./models/user.js"; 
const app = express();
const port = 3003;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Test route
app.get("/", (req, res) => {
  res.send('<h2 style="color:red">Welcome to Express Server</h2>');
});

// Register route
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    console.log(name, email, password);

    const newUser = new User({
      name,
      email,
      password,
    });

    await newUser.save();

    res.status(201).json({
      msg: "Successfully Registered!",
      user: newUser,
    });
  } catch (e) {
    console.error(e);

    res.status(500).json({
      msg: e.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});