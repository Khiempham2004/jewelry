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
        <Route path='/register' element={<>
          <Navbar />
          <Register />
        </>} />
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
          <ProjectFollow />
          <Footer />
        </>} />
        <Route path='/cart' element={
            <>
              <Navbar />
              <ShoppingCart /><hr></hr>
              <Footer/>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
