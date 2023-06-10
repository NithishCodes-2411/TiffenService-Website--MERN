const userModel = require("../models/user-models");
const userAddressModel = require("../models/userAddress-module");

const verifyUser = async (req, res) => {

    const emailAddress = req.body.emailAddress;


    // Checking if the user already exist  
    try {

        const getEmailAddress = await userModel.find({
            emailAddress: emailAddress,
        });


        if (getEmailAddress.length != 0) {
            res.status(400).json({
                message: "User Already exists"
            })
        }
        else {
            res.status(200).json({
                message: "No user found",
            });
        }
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error " + error,
        });
    }

};

const userRegisteration = async (req, res) => {

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const emailAddress = req.body.emailAddress;
    const password = req.body.password;
    const phnNumber = req.body.phnNumber;
    const address = req.body.address;
    const securityQuestionOne = req.body.securityQuestionOne;

    //Creating new user model in the DB

    try {
        await userModel.create({
            firstName,
            lastName,
            emailAddress,
            password,
            phnNumber,
            address,
            securityQuestionOne
        })

        await userAddressModel({
            emailAddress,
            address
        })

        res.status(201).json({
            message: "User Registered Successfully",
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error " + error
        });
    }
};

module.exports = {
    verifyUser, userRegisteration
};