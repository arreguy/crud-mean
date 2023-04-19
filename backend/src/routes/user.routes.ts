import express from "express";
import { UserModel } from "../models/user.model";

const userRouter = express();

userRouter.get("/", async (req, res) => {
    const users = await UserModel.find({});

    try {
        res.send(users)
    } catch (error) {
        res.status(500).send(error);
    }
});

export default userRouter;