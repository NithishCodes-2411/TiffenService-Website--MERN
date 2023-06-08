const userModel = require("../models/user-models");

const userLogin =  async (req , res) => {
    

    const emailAddress = req.body.emailaddress;
    const password = req.body.password;

    //fetch user from the DB.
    const getUser = await userModel.find({ emailAddress: emailAddress});
    if(getUser.length !==0 && getUser[0].password === 
        password){
            res.status(200).json({
                message: "User Login Successfully"
            })
        }
    else{
        res.status(400).json({
            message: "Email address/Password is incorrect",
          });
    }

}

module.exports = userLogin ;