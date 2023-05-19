 
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import './style/Navbar.css';
import TheGreenChutney from './components/Page2';
import Plans from './components/plans';
import  Carousel  from './components/Carousel.js';
import TheGc from './components/TheGc';
import Reviews from './components/Reviews';
import Contact from './components/Footer';

function App() {

  return (
    <div className="App">
   
      <HomePage/>

      <TheGreenChutney/>
      <Plans/> 
      <Carousel/>
      <Contact/>

      

    </div>
  );

}

export default App;


