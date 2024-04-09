import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Component/Navbar/Navbar.js';
import Register from './Component/Register/Register.js';
import Home from './Component/Home/Home.js';
import Store from './Component/Store/Store.js';
import Login from './Component/login/login.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Navbar />
        </>} />
        <Route path='/trangchu' element={<>
          <Navbar />
          <Home />
        </>} />
        <Route path='/register' element={<>
          <Navbar />
          <Register />
        </>} />
        <Route path='/login' element={<>
          <Navbar/>
          <Login />
        </>} />
        <Route path='/moi' element={<>
          <Store />
        </>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
