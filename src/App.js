 
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import './style/Navbar.css';
import TheGreenChutney from './components/Page2';
import Plans from './components/plans';
import  Carousel  from './components/Carousel.js';
import TheGc from './components/TheGc';
import Reviews from './components/Reviews';

function App() {

  return (
    <div className="App">
   
      <HomePage/>

      <TheGreenChutney/>
      <Plans/> 
      <Carousel/>
      <TheGc/> 
  
    </div>
  );

}

export default App;


