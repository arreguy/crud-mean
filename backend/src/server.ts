import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import messageRouter from './routes/message.routes';
import appRouter from './routes/app.routes';
import userRouter from './routes/user.routes';
import path from "path";

mongoose.connect("mongodb://127.0.0.1:27017/db-mean");

const app = express();
app.use(cors({
    credentials: true,
    origin:["http://localhost:35901"]
}));

app.use('/message', messageRouter);
app.use('/', appRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})