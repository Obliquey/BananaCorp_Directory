import express from "express";
import dotenv from "dotenv";
import { MongoClient, ObjectId } from "mongodb";
import { promises as fs } from 'fs';
import cors from 'cors';

dotenv.config();
// process.loadEnvFile();

const app = express();
app.use(express.json());
app.use(cors());
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

// Search for employee based on their unique ID number
app.get("/employees/:id", async(req, res) => {
    try {
        const employee = await collection.findOne({'employeeInfo.id' : +req.params.id})
        res.json(employee);
    } catch (err) {
        console.error("Error:", err);
        res.status(500).send("Something went wrong when trying to get employee data.");
    }
});

app.get('/employees/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const employees = await collection.find({ 'employeeInfo.name': { $regex: name, $options: 'i' } });
        res.json(employees);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Something went wrong when trying to get employee data.');
    }
});


app.post("/login", async (req, res) => {
    const {username, password} = req.body;
    try {
        const user = await collection.findOne({'userInfo.username':`${username}`});
        const pWord = await collection.findOne({'userInfo.password':`${password}`});

        if(user.userInfo.username == username && pWord.userInfo.password == password){
            res.status(200).send(user);
        } else {
            throw Error("Invalide username or password");
        }
    } catch (error) {
        res.status(401).send("Error loggin in:", error);
    }
});

app.post("/register", async (req, res) => {

})
// will use later for running on build version
// app.use(express.static(path));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});