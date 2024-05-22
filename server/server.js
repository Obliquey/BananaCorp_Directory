import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import { promises as fs } from 'fs';
import cors from 'cors';

// dotenv.config();
// process.loadEnvFile();

const app = express();
app.use(express.json());
app.use(cors());
const PORT = process.env.PORT || 3000;

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;
const collectionName = process.env.MONGO_DB_COLLECTION;

app.get("/", (req, res) => {
    res.send("Hello world!");
});



app.post("/login", async (req, res) => {
    const {username} = req.body;
    const {password} = req.body;
    try {
        const client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        const user = collection.find()
        res.status(200).send("Good job");
    } catch (error) {
        console.error("Error in route /login", error)
    }
});

app.post("/register", async (req, res) => {

})
// will use later for running on build version
// app.use(express.static(path));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});