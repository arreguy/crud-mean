import mongoose from 'mongoose';

let userSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    messages: {type: mongoose.Schema.Types.ObjectId, ref: 'Message'}
});

export default mongoose.model('User', userSchema);