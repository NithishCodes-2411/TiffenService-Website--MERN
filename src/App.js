
import './App.css';    
import Login from './components/Login';
import Signup from './components/SignUp';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import ChooseMenu from './components/ChooseMenu';
import ResetPassword from './components/ResetPassword';




function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path = "/Signup" element = {<Signup/>}/>
          <Route path = '/chooseMenu' element = {<ChooseMenu/>}/>
          <Route path = '/forgotPassword' element={<ResetPassword/>}/>

        </Routes>

      </BrowserRouter>
    </div>
  );

}

export default App;


