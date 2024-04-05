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
import Progress from "./Progress";
import Quanties from "./Quanties";
import Files from "./Files";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Quanties" element={<Quanties />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Addcart" element={<Addcart />} />
          <Route path="/SighUp" element={<SighUp />} />
          <Route path="/Progress" element={<Progress />} />
          <Route path="/Files" element={<Files />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
