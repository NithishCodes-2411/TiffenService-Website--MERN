import react from 'react' ;
import logopic from '../assets /GC.png'
import '../style/Navbar.css';
import homepic from '../assets /IMG_3495.jpg'


function Navbar(){
    return (

        <div className='header'>
            <div className='left'>
                <img src = {logopic}></img>
            </div>
            <div className='right'>
            <button className='navbutton'><b>Aldredy a customer?</b></button>
            </div>
        </div>

    )
}



export default  Navbar;




