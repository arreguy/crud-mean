import express, { response } from "express";
import { MessageModel } from "../models/message.model";

const messageRouter = express();

messageRouter.get("/messages", async (req, res) => {
    const messages = await MessageModel.find({});

    try {
        res.send(messages)
    } catch (error) {
        res.status(500).send(error);
    }
});

messageRouter.post("/message", async (req, res) => {
    const message = new MessageModel(req.body);
    
    try {
        await message.save();
        res.send(message);
    } catch (error) {
        res.status(500).send(error);
    }
});

messageRouter.patch("/message/:id", async (req, res) => {
    try {
    MessageModel.findByIdAndUpdate(req.params.id, req.body, {new: true}) 
    return res.send("Saved.")
    } catch (error) {
        res.status(500).send(error);
    }
});

messageRouter.delete("/message/:id", async (req, res) => {
    try {
        const message = await MessageModel.findByIdAndDelete(req.params.id);

        if (!message) response.status(404).send("No item found.");
        response.status(200).send();
    } catch (error) {
        res.status(500).send(error);
    }
});

export default messageRouter;