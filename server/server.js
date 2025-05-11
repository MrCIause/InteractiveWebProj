const express = require("express");
const mongoose = require("mongoose");
const { MongoClient, ServerApiApplication } = require("mongodb");
const multer = require("multer");
const upload = multer({ dest: "uploads" });

const uri =
  "mongodb+srv://adisan100:21072001@cluster0.asj75ph.mongodb.net/CarDealerShip?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

// 1. Connect to the DB named “Users” (not “CarDealerShip”)
mongoose
  .connect(uri)
  .then(() => console.log("✅ MongoDB connected to Atlas database"))
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
  });

// 2. Define your schema and force it to use the “Users” collection
const UserSchema = new mongoose.Schema(
  {
    username: String,
    code: String,
    email: String,
  },
  {
    collection: "Users",
  }
);

const User = mongoose.model("User", UserSchema);

const VehicleSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
    phonenumber: String,
    price: String,
    currency: String,
    category: String,
    tags: String,
    km: String,
    year: String,
    manufacturer: String,
    imgs: [{ data: Buffer, contentType: String }],
  },
  {
    collection: "Vehicles",
  }
);

const Vehicle = mongoose.model("Vehicle", VehicleSchema);

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

app.get("/getVehicles", async (req, res) => {
  console.log("GET vehicles called");
  try {
    const vehicles = await Vehicle.find({});
    console.log("   → found users:", vehicles);
    res.json({ vehicles });
  } catch (err) {
    console.error("Error fetching vehicles", err);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(5000, () => {
  console.log("Server started on port 5000.");
});
