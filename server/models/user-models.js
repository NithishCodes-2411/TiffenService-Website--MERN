const { Security } = require("@mui/icons-material");
const moongose = require ("mongoose");

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
    },
    SecurityQuestionOne :{
        type : String ,
        required : true 
    },
    SecurityQuestionTwo : {
        type : String ,
        required : true
    }
})