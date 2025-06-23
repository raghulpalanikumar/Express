const mongoose = require('mongoose');
const userData = new mongoose.Schema({
    username:String,
    password:String
})
module.exports=mongoose.model('ragu',userData)