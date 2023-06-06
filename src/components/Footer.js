import React from "react";
import '../style/Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import ArchiveIcon from '@mui/icons-material/Archive';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


function Contact() {
    return (
        <>

            <section className="footer">
       
                <h1 className="footerHead">For Queries</h1>
                <div className="contactRight">
                    <form name = "submit-to-google-sheet" >
                        <input type=" text " name="name" placeholder="Your Name" required  ></input>
                        <input type="email" name="email " placeholder="Your email " required ></input>
                        <textarea name="Message" rows="6" placeholder="Your Message"></textarea>
                        <button className="button-white" type="submit">Submit</button>
                    </form>
                </div>

                <div className="row">
                <div className="nine columns centered">
                    <ul>
                        <li><a href="">Terms and Condition</a> </li>
                        <li> <a href="http://www.facebook.com/Supview" rel="nofollow">Facebook</a> </li>
                        <li> <a href="http://twitter.com/Supview" rel="nofollow">Twitter</a> </li>
                        <li> <a href="http://www.behance.net/Supview" rel="nofollow">Instagram</a> </li>
                    </ul>
         
                    <p>Ashooarora65@gmail.com</p>
                    <p>7824092249</p>

                    <p class="copyright">This webpage  belongs to The Green Chutney   <br></br>© Copyright 2023 Supview. All rights reserved.</p>	
                </div>
            </div>
  
            
            </section>
        </>
    )
};


const scriptURL = 'https://script.google.com/macros/s/AKfycbzKtP2n9WgXapFzuNTCw4eBLVq5KgfDHI80Ucm1n0bWLGAn9OmS1UmgT_iJMsdVSLRHig/exec';
const form = document.forms['submit-to-google-sheet']

window.addEventListener("submit", (event) => {
  event.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})

export default Contact;