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
import Admin from "./Admin";
import Carts from "./Carts";
import OrderNow from "./OrderNow";
// import PrivateRoute from "./Routes/PrivateRoutes/PrivateRoute";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<PublicRoute />}> */}
          <Route path="/Login" element={<Login />} />
          <Route path="/SighUp" element={<SighUp />} />
          {/* </Route> */}
          {/* <Route element={<PrivateRoute />}> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/Quanties" element={<Quanties />} />

          <Route path="/Product" element={<Product />} />
          <Route path="/Addcart" element={<Addcart />} />

          <Route path="/Progress" element={<Progress />} />
          <Route path="/Files" element={<Files />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Carts" element={<Carts />} />
          <Route path="/OrderNow" element={<OrderNow />} />
          {/* </Route> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
