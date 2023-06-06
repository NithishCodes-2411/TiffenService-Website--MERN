const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName:{
        type : String,
        required : true
    },
    lastName:{
        type:String,
        required : true
    },
    emailAddress:{
        type : String ,
        required : true
    },
    password : {
        type : String ,
        required : true
    },
    phoneNumber : {
        type : String ,
        required : false
    },
    address : {
        type : String ,
        required : false
    }
});

const User = new mongoose.model("user", userSchema);

module.exports = user;