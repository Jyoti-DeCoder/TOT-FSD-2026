import express from "express";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();
const PORT = 4000;
const app = express();
//const PORT = process.env.PORT || 3002;

app.use(express.json());

const FILE_NAME = "users.json";

// Get all users
app.get("/users", (req, res) => {
  fs.readFile(FILE_NAME, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const users = JSON.parse(data || "[]");
    res.json(users);
  });
});

// Create user
app.post("/user", (req, res) => {
  const newUser = req.body;

  fs.readFile(FILE_NAME, "utf8", (err, data) => {
    if (err) {
      return res.status(500).json({ message: "Error reading file" });
    }

    const users = JSON.parse(data || "[]");

     const existingUser = users.find(
      (user) => user.email === newUser.email
    );

    if (existingUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    newUser.id = users.length + 1;

    users.push(newUser);

    fs.writeFile(FILE_NAME, JSON.stringify(users, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: "Error writing file" });
      }

      res.status(201).json({
        message: "User created successfully",
        user: newUser,
      });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});