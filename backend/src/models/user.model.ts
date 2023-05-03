import {Schema, model} from "mongoose";

export const UserSchema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    gender: {type: String, required: true},
    country: {type: String, required: true},
    majority: {type: Boolean, required: true},
    email: {type: String, required: true, unique: true}
});

export const UserModel = model("user", UserSchema)