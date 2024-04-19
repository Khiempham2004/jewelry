import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from '../../Component/Navbar/Navbar';
import Home from '../../Component/Home/Home';
const Index = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
}

export default Index;
