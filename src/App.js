 
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './components/Home';
import './style/Navbar.css';
import TheGreenChutney from './components/Page2';
import Plans from './components/plans';
import  Carousel  from './components/Carousel.js';



function App() {

  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <TheGreenChutney/>
      <Plans/> 
      <Carousel/> 
    </div>
  );

}

export default App;
