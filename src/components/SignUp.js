import react from 'react';
import useState from 'react';

function Signup() {

    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [emailAddress, setEmailAddress] = useState("");
    const [emailAddressError, setEmailAddressError] = useState("");

    const [password, setPassword] = useState("");
    const [passWordError, setPasswordError] = useState("");

    const [confirmPassWord, setConfirmPassword] = useState("");
    const [confirmPasswordError, SetconfirmPasswordError] = useState("");

    const [phnNumber, setPhnNumber] = useState("");
    const [phnNumberError, setPhnNumbeError] = useState("");

    const [address, setAddress] = useState("");



    /* This function gets Called when an input is entered for the firstName filed*/
    const handleFirstName = (e) => {

        let fName = e.target.value;
        let fNameRegex = /^[a-zA-Z ]+$/;
        let error = "";

        if (fName.trim()) {
            error = "First Name cannot be empty";
        }
        else if (!fNameRegex.test(fName)) {
            error = "First Name should only  have alphabets";
        }
        else {
            setFirstName(fName);
            setFirstNameError("");
        }
        setFirstNameError(error)
    };


    /* This function gets Called when an input is entered for the LastName field*/
    const handleLastName = (e) => {

        let lName = e.target.value;
        let lNameRegex = /^[a-zA-Z ]+$/;
        let error = "";

        if (lName.trim()) {
            error = "Last Name cannot be empty";
        }
        else if (!lNameRegex.test(fName)) {
            error = "Last Name should only  have alphabets";
        }
        else {
            setLastName(lName);
            setLastNameError("");
        }
        setLastNameError(error);
    }


    /* This method gets called when an input is entered for the Email field */
    const handleEmail = (e) => {

        let email = e.target.value;
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        let error = "";

        if (!email.trim()) {
            error = "Email Address cannot be empty";
        } else if (!emailRegex.test(emailAddressName)) {
            error = "Email Address doesn't match criteria, ex: xyz@outlook.com";
        } else {
            setEmailAddress(email);
            setEmailAddressError("");
        }
        setEmailAddressError(error);
    }


/*This method gets called when an input is entered for the password field*/
const handlePassWord = (e) => {

    let passwordVal = e.target.value;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let err = "";

    if(!passwordVal.trim()){
        error = "Password cannot be empty";
    }
    else if(!passwordRegex.test(passwordVal)){
        error = "Password doesn't match the criteria, \n" + 
        "at least eight characters,\n" +
        "at least one number,\n" +
        "at least one lowercase letter,\n" +
        "at least one uppercase letter, \n" +
        "at least one special character ";
    }
    else{
        setPassword(passwordVal);
    }
    setPasswordError(error);
}


/*This method gets called when an input  is entered for the confirmPassword field*/
const handleConfirmPassword = (e) => {
    
    let confirmPass = e.target.value;
    let error = "";
    if(!confirmPass.trim()){
        error = "confirm password cannot be empty";
    }
    else if (password !== confirmPassword){
        error = "Password  does not match"
    }
    else{
        setConfirmPassword(confirm);
    }
}


/*This method gets executed when an input is entered for the phone Number field*/
const handlePhoneNumber = (e) => {

    let phNum = e.target.value;
    let phNumRegex =  /^[0-9]{10}$/;
    let error = "";

    if(!phNumRegex.test(phNum)){
        error = "Phone number should only contain 10 digits";
    }
    else {
        setPhnNumber(phNum);
    }
    setPhnNumbeError(error);
}


/* This method gets exceduted when an input is entered for the adress field*/
const handleAdress = (e) => {
    
    let add = e.target.value;
    if(!add.trim()){
        setEmailAddressError("The address is empty!")
    }
    else{
        setAddress(add);
    }
}

const handleSubmit = (e) => {

    console.log("form submitted ");
    
}





return (
    <>
     <form>
            <input type='firstName' onChange= {handleFirstName} />
            <br></br>
            <input type='lastName' onChange={ {handleLastName} } />
            <br></br>
            <input type='email' onChange={{handleEmail}} />
            <br></br>
            <input type = 'password' onChange = {{handlePassWord}}/>
            <br></br>
            <input type = 'confirmPassword' onChange = {{handleConfirmPassword }}/>
            <br></br>
            <input type = 'phoneNumber' onChange = {setPhnNumber(e.target.value)}/>
            <br></br>
            <input type = 'address' onChange =  {setAddress(e.target.value) }/>
            <br></br>
         
            <button onClick = {handleSubmit}>Submit</button>
        </form>
    </>

    

    

)

};


export default  Signup;