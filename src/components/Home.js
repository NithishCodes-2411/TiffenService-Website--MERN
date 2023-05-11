import react from 'react' ;
import '../style/Home.css';
import {Link} from 'react-scroll';  




function HomePage(){
    return (

    <section>
    <div className="page1">
        <div className='homeeepic'></div>
        
       <div className="huge-title centered">  
           <h1><em>A fresh experience delivered at your door step</em></h1>
           <div className="space"></div>
           <Link to="container" spy={true} smooth={true} offset={50} duration={1000} className="button-white goto">Discover more</Link> 
       </div>
       <div className="go-down twelve columns">
       </div>
   </div>
   </section>

    )

};


export default HomePage;