import express from "express";
import cors from "cors";
import mongoose from 'mongoose';

const PORT = 5000;
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/db-mean");

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.get("/", (req, res) => {
    res.send("hello world!");
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})