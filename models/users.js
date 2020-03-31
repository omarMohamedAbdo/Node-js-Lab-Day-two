const mongoose = require ('mongoose');

const userschema = new mongoose.Schema({
    firstName:{type: String , required: true , minlength: 5 },
    lastName:{type: String, required: true},
    email:{type: String ,unique: true , required: true },
    password: String,
    posts: [{ type : mongoose.Schema.Types.ObjectId, ref : 'Post' }]
})
const UserModel = mongoose.model('User',userschema);

module.exports = UserModel ;