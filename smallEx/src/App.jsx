import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topnavbar from "./Component/Navbar/Topnavbar";
import Bottombar from "./Component/Navbar/Bottombar";

import Product from "./Component/Product/Product";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Singup from "./Component/Auth/Singup";
import Login from "./Component/Auth/Login";
import Map from "./Component/Map/Map";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/singup" element={<Singup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />}>
            <Route path="/product" />
            <Route path="/seeproduct" />
            <Route path="/sell" />
            <Route path="/notification" />
            <Route path="/mystore" />
            <Route path="/account" />
          </Route>
          <Route path="/about" element={<Topnavbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
