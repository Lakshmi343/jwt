import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./db.js";

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 5000; // Corrected line
app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} port ${PORT}`.bgCyan.white);
});

