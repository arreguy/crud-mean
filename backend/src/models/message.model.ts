import {Schema, model} from "mongoose";

export const MessageSchema = new Schema ({
    content: {type: String, required: true},
    user: {type: String, ref: 'user'}
});

export const MessageModel = model("message", MessageSchema)