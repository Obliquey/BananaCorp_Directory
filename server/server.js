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

const url = process.env.MONGO_DB_URL;
const dbName = process.env.MONGO_DB;

const client = await MongoClient.connect(url);
const db = client.db(dbName);
const collection = db.collection('directory');

app.get("/employees", async(req, res) => {
    try {
        const employees = await collection.find({}).toArray();
        res.json(employees);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Something went wrong when trying to get employee data.");
    }
});

app.get("/employees/:id", async(req, res) => {
    try {
        const employee = await collection.findOne({"employeeData.id" : +req.params.id})
        res.json(employee);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Something went wrong when trying to get employee data.");
    }
});

app.get("/employees/:name", async(req, res) => {
    try {
        const { searchTerm } = req.params
        const regexSearch = new RegExp(searchTerm, 'i');
        const employee = await collection.find({"employeeData.name" : regexSearch})
        res.json(employee);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Something went wrong when trying to get employee data.");
    }
});

// will use later for running on build version
// app.use(express.static(path));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});