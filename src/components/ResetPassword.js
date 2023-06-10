
import React from 'react';
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';

function ForgotPassword() {

    const [emailAddress, setEmailAddress] = useState("");
    const [emailSuccess, setEmailSuccess] = useState(false);
    const [emailAddressError, setEmailAddressError] = useState("");
    const [securityQuestionOne, setSecurityQuestionOne] = useState("");
    const [q1Success, setQ1Success] = useState(false);
    const [securityQuestionOneError, setSecurityQuestionOneError] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [passwordSuccess, setPasswordSuccess] = useState(false);
    const [newPasswordError, setNewPasswordError] = useState("");
    const [confirmNewPassword, setConfirmNewPassword] = useState("");
    const [conPasswordSuccess, setConPasswordSuccess] = useState(false);
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useHistory();


    /* This method gets called when there is an input in email field */
    const handleEmailAddress = (e) => {

        let email = e.target.value;
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let error = "";

        if (!email.trim()) {
            error = "Email Address cannot be empty";
            setEmailAddressError(error);
            setEmailSuccess(false);
        } else if (!emailRegex.test(email)) {
            error = "Email Address doesn't match criteria, ex: xyz@outlook.com";
            setEmailAddressError(error);
            setEmailSuccess(false);
        } else {
            setEmailAddress(email);
            setEmailAddressError("");
            setEmailSuccess(true);
        }
  
    }


        } else {
    /*This method gets called when there in an input in the answer for the security question field*/
    const handleQuestion = (e) => {

        setPasswordError("");
        let sqOne = e.target.value;
        let sqOneRegex = /^[a-zA-Z ]+$/;
        let error = "";
        if(!sqOne.trim()) {
            err = "Security Question Answer cannot be empty";
            setQ1Success(false);
        } else if(!sqOneRegex.test(sqOne)) {
            error = "Security Question Answer should only have alphabets";
            setQ1Success(false);
        } else {
            setQ1Success(true);
        }
        setSecurityQuestionOne(sqOne);
        setSecurityQuestionOneError(error);
    }


    /*This method gets called when an input is entered for the Newpassword field*/
    const handlePassWord = (e) => {

        let passwordVal = e.target.value;
        let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        let error = "";

        if (!passwordVal.trim()) {
            error = "Password cannot be empty";
        }
        else if (!passwordRegex.test(passwordVal)) {
            error = "Password doesn't match the criteria, \n" +
                "at least eight characters,\n" +
                "at least one number,\n" +
                "at least one lowercase letter,\n" +
                "at least one uppercase letter, \n" +
                "at least one special character ";
            setPasswordError(error);
        }
        else {
          
            setNewPassword(passwordVal);
            setNewPasswordError("");
            setPasswordSuccess(true);
        
        }

    }


    /*This method gets called when an input  is entered for the confirmPassword field*/
    const handleConfirmPassword = (e) => {

        let confirmPass = e.target.value;
        let error = "";
        if (!confirmPass.trim()) {
            error = "confirm password cannot be empty";
            SetconfirmPasswordError(error);
        }
        else if (newPassword !== confirmPass) {
            error = "Password  does not match";
            SetconfirmPasswordError(error);
        }
        else {
        
            setConfirmNewPassword(confirmPass);
            setConfirmNewPasswordError("");
            setConPasswordSuccess(true);
        }
    }

    const handleSubmit = () => {

        if()

    }


      


        




    

    return (
        <>
        <h1>Reset Password</h1>
        <form>

                <label>E mail</label>
                <input type='email' onChange={handleEmailAddress} />

                <label>Security Question - Whats your Favourite city</label>
                <input typt= 'text'onChange={handleQuestion}/>
                <br></br>

                <label>New Password</label>
                <input type='password' onChange={handlePassWord} />
            
                <label>Confirm Password</label>
                <input type='password' onChange={handleConfirmPassword} />
            
            
                <button onClick={handleSubmit}>Submit</button>
        </form>
        </>

    )

    }

export default ForgotPassword;
