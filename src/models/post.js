const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema({
    phrase: {type: String, required: true},
    backgroundColor: {type: String, required: true},
    likes: [{type: Schema.ObjectId, ref: "User"}],
    comments: [{ userId : {type: Schema.ObjectId, ref: "User"}, texts : [{type: String}]}],
    user: {type: Schema.ObjectId, ref: "User", required: true }
});

module.exports = mongoose.model('Post', PostSchema);

 