import {Schema, model} from "mongoose";

export const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: {type: Schema.Types.ObjectId, ref: 'message'}
});

export const UserModel = model("user", UserSchema)