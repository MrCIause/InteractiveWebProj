const express = require("express");
const mongoose = require("mongoose");

const app = express();

// 1. Connect to the DB named “Users” (not “CarDealerShip”)
mongoose
  .connect("mongodb://localhost:27017/CarDealerShip")
  .then(() => console.log("✅ MongoDB connected to “Users” database"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// 2. Define your schema and force it to use the “Users” collection
const UserSchema = new mongoose.Schema(
  {
    userName: String,
    pass: Number,
    email: String,
  },
  {
    collection: "Users",
  }
);

const User = mongoose.model("User", UserSchema);

// 3. Your GET route—no other changes
app.get("/getUsers", async (req, res) => {
  console.log("GET /getUsers called");
  try {
    const users = await User.find({});
    console.log("   → found users:", users);
    res.json({ users });
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000.");
});
