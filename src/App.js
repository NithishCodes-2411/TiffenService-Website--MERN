
import './App.css';    
import Login from './components/Login';
import Signup from './components/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path = "/Signup" element = {<Signup/>}/>
        </Routes>

      </BrowserRouter>





    </div>
  );

}

export default App;


