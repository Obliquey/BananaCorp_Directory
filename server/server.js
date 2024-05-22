import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import { promises as fs } from 'fs';

// dotenv.config();
// process.loadEnvFile();

const app = express();
app.use(express.json());
// app.use(cors());
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello world!");
});


// will use later for running on build version
// app.use(express.static(path));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});