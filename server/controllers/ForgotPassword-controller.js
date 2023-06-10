const userModel = require("../models/user-models");

const forgotPassword = async (req, res) => {

    const emailAddress = req.body.emailAddress;
    const password = req.body.newPassword;
    const securityQuestionOne = req.body.securityQuestion;

    try {
        const getUser = await userModel.find({ emailAddress: emailAddress });
        if (getUser.length !== 0) {

            if (getUser[0].securityQuestionOne === securityQuestionOne) {
                await userModel.updateOne({
                    emailAddress: emailAddress,
                },
                    {
                        password: password,
                    })
                res.status(201).json({
                    message: "Password changed successfully",
                });
            }
            else {
                res.status(400).json({
                    message: "Security question answers are incorrect",
                });
            }

        }
        else {
            res.status(400).json({
                message: "Email address is incorrect",
            });
        }

    }
    catch (error) {
        res.status(500).json({
            message: "Internal Server Error" + error,
        })

    }

};

module.exports = forgotPassword ;