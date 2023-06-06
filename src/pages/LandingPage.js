import '../App.css';
import HomePage from '../components/Home';
import '../style/Navbar.css';
import TheGreenChutney from '../components/Page2';
import Plans from '../components/plans';
import Carousel from '../components/Carousel.js';
import Contact from '../components/Footer';

function LandingPage() {

    return (
        <div className="A">
            <HomePage />
            <TheGreenChutney />
            <Plans />
            <Contact />
        </div>
    );

}

export default LandingPage;


