require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");

const app = express();

// Middleware
app.use(express.json());

// Routes
app.get("/", (req, res) => {
    res.send("MERN backend is running!");
});

app.use("/api/users", userRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");

        app.listen(5000, () => {
            console.log("Server running on port 5000");
        });
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error);
    });