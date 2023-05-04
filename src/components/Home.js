import react from 'react' ;
import '../style/Navbar.css';
import homepic from '../assets /IMG_3495.jpg'


function HomePage(){
    return (
       
            <div className='home'>
                <div className = 'container'>
                    <p className='p1'>Choose your plan</p>
                    <p> Some Random texts</p>
                    <p>Meals per week</p>
                    <div className='weekplan'>
                         <button>5</button>
                         <button>6</button>
                    </div>
                    <p>Meals per day</p>
                    <div className='dailyplan'>
                        <button>2</button>
                        <button>3</button>
                        <button>4</button>
                    </div>
                </div>
            </div>

     
    )
}

export default HomePage;