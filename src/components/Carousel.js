import React from 'react';
import { useState } from 'react';
import '../style/Carousel.css';
import { menu } from '../CarouselData';
import menuPic from '../images/wooden-board-empty-table-top-blurred-background.jpg';



function Carousel(){
  
    return (

        <div className='carousel'>
            <div className='carouselInner' >

                <div className='left'> </div>
                <div className='centre'> </div>
                <div className='right'> </div>

            </div>

        </div>
    )
} 
export default Carousel;