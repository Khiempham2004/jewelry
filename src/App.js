import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar.js';
import Register from './Component/Register/Register.js';
import Home from './Component/Home/Home.js';
import Login from './Component/login/login.js';
import Following from './pages/Following/index.js'
import ProjectFollow from './pages/ProjectFollow/ProjectFollow.js';
import Store from './Component/Store/Store.js';
import OutStand from './Component/Store/OutStand.js';
import Footer from './Component/Footer/Footer.js';
import Latest from './Component/Store/Latest.js';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Navbar />
        </>} />
        <Route path='/trangchu' element={<>
          <Following />
        </>} />

        <Route path='/register' element={<>
          <Navbar />
          <Register />
        </>} />
        <Route path='/login' element={<>
          <Navbar />
          <Login />
        </>} />
        <Route />
        <Route path='/moi' element={<>
          <Navbar />
          <Home />
          <Store />
          <Footer /></>} />
        <Route path='/noibat' element={<>
          <Navbar />
          <Home />
          <OutStand />
        </>} />
        <Route path='/banchay' element={<>
          <Navbar />
          <Home />
          <Latest />
        </>} />
        <Route path='/karma' element={<><ProjectFollow /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
