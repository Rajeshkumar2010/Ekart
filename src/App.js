import React from "react";

// import Product from "./Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Cart1 from "./Cart1";
import HomePage from "./HomePage";
// import Navbar from "./Navbar";
import Login from "./Login";
import SighUp from "./SighUp";
import Product from "./Product";
import Addcart from "./Addcart";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Addcart" element={<Addcart />} />
          <Route path="/SighUp" element={<SighUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
