import react from 'react';
import aboutpic from '../images/aboutUs.jpg';
import '../style/plans.css';
import pic1 from '../images/plan1.jpg';
import Pic2 from '../images/plan2.jpg';
import Pic3 from '../images/plan4.jpg';



function Plans(){
    
    return (

    <div id="portfolio">
        <div className="container">
            <h1 className = "subTitles">Our plans</h1>
            <div className="workList">
                <div class="work">
                    <img src = {pic1}></img>
                    <div className = "layer ">
                        <h3> Plan 1</h3>
                        <p>5 meals / Week<br></br>
                        $250 / Month</p>
                    </div>
                </div>
                <div className="work">
                    <img src = {Pic2}></img>
                    <div className = "layer ">
                        <h3>Plan 2</h3>
                        <p>6 meals / Week<br></br>
                        $300 / Month</p>
                    </div>
                </div>
                <div className="work">
                    <img src = {Pic3}></img>
                    <div className = "layer ">
                        <h3>Trial plan</h3>
                        <p>$15 / meal </p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
    )
};

export default Plans;