import mongoose from 'mongoose';

let messageSchema = new mongoose.Schema({
    content: {type: String, required: true},
    user: {type: mongoose.Schema.Types.ObjectId}
});

export default mongoose.model('Message', messageSchema);