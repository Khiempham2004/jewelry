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
import Products from './Component/products/products.js';
import Blog from './Component/blogs/blog.js';
import Information from './Component/Store/Information.js';
import ProductsList from './Component/products/productsList.js';
import BlogHome from './Component/products/blogHome.js';
import ShoppingCart from './Component/shoppingCart/shoppingCart.js';
import { useState } from 'react';
import Header from './Component/Header/Header.js';
import AccountPage from './Component/Profile/AccountPage.js';
import Orders from './Component/Profile/Orders.js';

function App() {
  const [cartItem, setCartItem] = useState([]);
  const addToCart = (item) => {
    setCartItem([...cartItem, item]);
  };


  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<>
          <Navbar />
        </>} />
        <Route path='/trangchu' element={<>
          <Following />
        </>} />
        <Route path='/sanpham' element={<>
          <Navbar />
          <ProductsList />
          <Products />
          <Footer />
        </>} />
        <Route path='/blog' element={<>
          <Navbar />
          <BlogHome /><br></br>
          <Blog />
          <Footer />
        </>}
        />
        <Route path='/header' element={
          <>
          <Navbar/>
          <Header /></>
        } />
        <Route path='/register' element={<>
          <Navbar />
          <Register />
        </>} />
        <Route path='/account' element={<>
          <Navbar />
          <AccountPage />
        </>} />
        <Route path='/account/order' element={<>
          <Navbar />
          <Orders /></>} />
        <Route path='/login' element={<>
          <Navbar />
          <Login />
        </>} />
        <Route
          path='/gioithieu' element={<>
            <Navbar />
          </>}
        />
        <Route path='/moi' element={<>
          <Navbar />
          <Home />
          <Store />
          <Information />
          <Footer />
        </>} />
        <Route path='/noibat' element={<>
          <Navbar />
          <Home />
          <OutStand />
          <Information />
          <Footer />
        </>} />
        <Route path='/banchay' element={<>
          <Navbar />
          <Home />
          <Latest />
          <Information />
          <Footer />
        </>} />
        <Route path='/karma' element={<>
          <Navbar />
          <ProjectFollow addToCart={addToCart} />
          <Footer />
        </>} />
        <Route path='/cart' element={
          <>
            <Navbar />
            <ShoppingCart cartItem={cartItem} /><hr></hr>
            <Footer />
          </>
        }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
