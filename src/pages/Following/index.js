import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import Home from '../../Component/Home/Home';
import Header from '../../Component/Header/Header';

const Index = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Header/>
      <Home />
    </div>
  );
}

export default Index;
