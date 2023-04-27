import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import messageRouter from './routes/message.routes';
import appRouter from './routes/app.routes';
import userRouter from './routes/user.routes';
import path from "path";

const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

mongoose.connect("mongodb://127.0.0.1:27017/db-mean");

app.use('/messages', messageRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})