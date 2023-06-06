import react from 'react';
import aboutpic from '../images/aboutUs.jpg';
import '../style/Page2.css';
import Login from './Login';
import { useNavigate } from 'react-router-dom';

function TheGreenChutney() {

    const navigate = useNavigate();

    function myOnClick() {
        navigate('/Login')
    }


    return (

        <div id="container" class="container">

            <section className="page2">
                <div className="row">
                    <h1>The Green Chutney</h1>
                    <br></br>

                    <div className="six columns article make-it-appear-right">

                        <p>Our enterprise began with a single purpose, one that we are proud and grateful to be honoring nearly three years later - <br></br>
                            making Indian cuisine accessible to the city of Halifax, Nova Scotia. Since 2020, we have emerged from the pandemic as one <br></br>of
                            the largest family-run businesses in the city, having served over 200 customers. Our menu is highly customizable and offers an array <br></br> of dishes
                            cooked up from fresh ingredients daily. We hope to convey that tradition can be implemented through modern, hygienic practices.<br></br>
                            We are proud of our work and offer you our services - you shall not be disappointed.
                        </p>

                        <button className='button-white' onClick={myOnClick} >LogIn / SignUp</button>


                        <div className="space"></div>



                    </div>

                </div>
            </section>
        </div>

    )
};

export default TheGreenChutney;