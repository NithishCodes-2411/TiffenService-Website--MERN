import React from 'react';
import { useState } from 'react';
import '../style/Carousel.css';
import { menu } from '../CarouselData';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';


function Carousel(){

    const [current , setCurrent] = useState(0);

  
    return (
        <>
        <h1 className='heading'>Menu options</h1>
        <div className='carousel'>
            <div className='carouselInner' >

                <div className='left' onClick={ ()=>{ current > 0  && setCurrent(current-1)}}><ArrowBackIosIcon style={{fontSize: 30}} /></div>

                <div className='centre'>
                    <p >
                    <h5 className='para'>
                        {menu[current].menuu1} <br></br>
                        {menu[current].menuu2} <br></br>
                        {menu[current].menuu3} <br></br>
                        {menu[current].menuu4}
                    </h5>    
                    </p>
                    <h1 className='head'> <b> {menu[current].title} </b> </h1>
                 </div>

                <div className='right' onClick={ ()=>{ current <  5 && setCurrent(current+1)}}> <ArrowForwardIosIcon style={{fontSize: 30}}/></div>

            </div>

        </div>

        </>
    )
} 
export default Carousel;