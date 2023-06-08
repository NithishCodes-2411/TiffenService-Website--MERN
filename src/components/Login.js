import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



import axios from "axios";

function Login() {

  const [emailaddress, setEmailAddress] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const [ success , setSuccess] = useState(false);

  const naviagte = useNavigate();


  const handleEmail = (e) => {
    let email = e.target.value;
    let emailRegex =  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    let error = "";

    if(!email.trim()){
      error = "Email Address cannot be empty";
      setSuccess(true);
    }
    else if (!emailRegex.test(email)){
      error = "Email address is not correct , ex : xyz@outlook.com";
      setSuccess(true);
    }
    else{
      setSuccess(true);
    }
    setEmailAddressError(error);
  }

  const  handlePassword = (e) =>{
    let passWord = e.target.value;

    let error = "";

    if(!passWord.trim()){
      error = "Password cannot be empty";
      setPasswordError(error);
      setSuccess(false);
    }
    else{
      setSuccess(true);
    }

  }

  const handleSubmit = () => {

    console.log(emailaddress);
    console.log(password);

    /*try {
      if(success){

        axios.post("/login" , {
          emailaddress : emailaddress ,
          password : password 
        })
        .then((res)=>{
          if(res.status === 200){
            naviagte('/chooseMenu');
          }
          else{
            setLoginError("Internal server error")
          }
        })


      }else{
        setLoginError ( "Login credentials cannot be empty" );
      }


      
    }
    catch (e){
      console.log(e);
    }*/

  };

  const handleSignUp = () => {
    naviagte('/Signup');
  }




  return (


    <>
      <h1>Login Page</h1>

      <form>
      <label>E mail</label>
        <input type="text" onChange={ handleEmail} placeholder="Email" />
        <h3>{emailAddressError}</h3>
        <br></br>
        <label>Password</label>
        <input type="password" onChange={ handlePassword } placeholder="password" />
        <h3>{passwordError}</h3>
        <br></br>
     
        <button  onClick={handleSubmit} >Submit</button>
      </form>
      <br></br>
      <button onClick= {handleSignUp}>Sign up</button>


    </>
  )
}
export default Login;

